import { Location } from "@angular/common";
import {
  AfterViewChecked,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlbumOverviewService } from "../../data-access/album-overview/album-overview.service";
declare var $: any;
declare var pinchzoomer: any;

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"],
})
export class AlbumsComponent implements OnInit, OnDestroy, AfterViewChecked {
  imgUrl: any;
  eventName: string;
  albumData: any;
  index: number;
  click: boolean = false;
  pageUrl: string;
  lgScreen: number;
  albumUrl =
    "http://ec2-13-233-223-187.ap-south-1.compute.amazonaws.com:8080/album?eventName=";
  currentImg: string;
  viewedImg: string;
  imgId: string;
  pinchZommerInitalised = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumOverviewService,
    private routes: Router,
    private location: Location
  ) {}

  @HostListener("wheel", ["$event"])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  ngAfterViewChecked() {}

  ngOnInit() {
    $("#exampleModal").ontouchmove = (e) => {
      e.preventDefault();
      return false;
    };
    $("body").addClass("modal-open");
    $(".placeholder-img").removeClass("non-opaque");
    $("#img10").addClass("img-div-trans");
    $("#img11").addClass("img-div-trans");
    this.route.queryParamMap.subscribe((params) => {
      this.currentImg = params.get("url")
        ? params.get("url").replace("large", "xxlarge")
        : undefined;
      this.viewedImg = this.currentImg;
      this.eventName = params.get("name");
      this.click = params.get("c") ? true : false;
      this.imgId = params.get("id") ? params.get("id") : undefined;
      $(".modal-trans").css(
        "transform-origin",
        params.get("x") + "px" + " " + params.get("y") + "px"
      );
      setTimeout(() => {
        $(".modal-trans").addClass("modal-trans-opacity");
      }, 200);

      this.fetchAlbumData();
    });

    $(window).resize(() => {
      this.reSizeImgCont();
    });
    this.pageUrl = location.href;
    this.reSizeImgCont();
    $("#wish-wel-button").on("click", () => {
      document.getElementById("welcome-screen").style.display = "none";
      $("#player").get(0).play();
      $("#body-tag").css("overflow-y", "scroll");
      document.getElementById("window-app").classList.add("window-load");
      document.getElementById("window-app").style.visibility = "visible";
    });
  }

  encoderTwitterURL() {
    // console.log(this.pageUrl.toString());
    let twUrl = "www.diyaaron.com?utm_source=webshare%26utm_medium=tw";
    return (
      "https://twitter.com/intent/tweet?text=Visit Aaron and Diya’s wedding website to celebrate their wedding moments. Browse through their wedding album and leave your message in their wedding guest book. " +
      encodeURI(twUrl.toString())
    );
  }

  fetchAlbumData() {
    this.albumService
      .getAlbumOverview(this.albumUrl + this.eventName)
      .subscribe((data: any) => {
        data.data = this.shuffleArray(data.data);

        if (this.click) {
          this.albumData = data;
          this.index = 0;
          this.imgId = this.albumData.data[this.index]._id;
          this.location.replaceState(
            "/albums?name=" +
              this.eventName +
              "&url=" +
              this.albumData.data[this.index].url +
              "&id=" +
              this.albumData.data[this.index]._id
          );
          this.pageUrl = location.href;
          $(".preload").attr("src", this.albumData.data[1].url);
        } else {
          this.intialiseImageIndex(data);
        }
        $(".img1" + this.index.toString()).addClass("opaque");
        $(".trans").addClass("trans-height");
        setTimeout(() => {
          this.loadImageArrayAsync(0);
        }, 200);
      });
  }

  shuffleArray(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  reSizeImgCont() {
    this.lgScreen = window.innerWidth > 980 ? 85 : 0;
    $(".content-block").height(window.innerHeight - this.lgScreen);
  }

  intialiseImageIndex(data) {
    for (const index in data.data) {
      if (data.data[index]._id === this.imgId) {
        this.albumData = data;
        this.index = parseInt(index);
      }
    }
    this.albumData = data;
    $(".preload").attr("src", this.albumData.data[this.index + 1].url);
  }

  loadImageArrayAsync(index) {
    var i = parseInt(index) - 1;
    $("#img1" + index).addClass("img-div-trans");
    $(".preload" + index).attr("src", this.albumData.data[index].url);
    $("#img1" + i).attr("src", this.albumData.data[i]?.url);
    $("#img1" + i).removeClass("img-div-trans");
    if (this.albumData.data.length === index + 1) {
      $("#img1" + index).attr("src", this.albumData.data[index].url);
      $("#img1" + index).removeClass("img-div-trans");
    }
  }

  nextImage() {
    if (this.albumData.data.length > this.index + 1) {
      $(".placeholder-img").addClass("non-opaque");
      this.imgId = this.albumData.data[this.index + 1]._id;
      this.location.replaceState(
        "/albums?name=" +
          this.eventName +
          "&url=" +
          this.albumData.data[this.index + 1].url +
          "&id=" +
          this.albumData.data[this.index + 1]._id
      );
      this.pageUrl = location.href;
      this.index = this.index + 1;
      this.viewedImg = this.albumData.data[this.index + 1].url;
      this.sendAlbumPhotosChangeEvent("next", this.viewedImg);
    }
  }

  prevImage() {
    if (this.index >= 1) {
      $(".placeholder-img").addClass("non-opaque");
      this.imgId = this.albumData.data[this.index - 1]._id;
      this.location.replaceState(
        "/albums?name=" +
          this.eventName +
          "&url=" +
          this.albumData.data[this.index - 1].url +
          "&id=" +
          this.albumData.data[this.index - 1]._id
      );
      this.pageUrl = location.href;
      this.index = this.index - 1;
      this.viewedImg = this.albumData.data[this.index - 1].url;
      this.sendAlbumPhotosChangeEvent("previous", this.viewedImg);
    }
  }

  ngOnDestroy() {
    $("body").removeClass("modal-open");
  }

  goToPage() {
    $(".modal-trans").addClass("modal-trans-opacity-leave");
    setTimeout(() => {
      this.routes.navigate(["/"]);
    }, 1000);
  }

  sendAlbumPhotosChangeEvent = (clickType: string, imgUrl: string) => {
    (<any>window).ga("send", "event", {
      eventCategory: "Album Gallery clicks",
      eventAction: "Viewed " + clickType + " photo in " + this.eventName,
      eventLabel: "Viewed: " + imgUrl,
      eventValue: 0,
    });
  };

  sendAlbumBackEvent = () => {
    (<any>window).ga("send", "event", {
      eventCategory: "Back to Home Page From Album",
      eventLabel: "Album viewed before navigated to Home " + this.eventName,
      eventAction: "Image viewed before navigated to Home " + this.viewedImg,
      eventValue: 0,
    });
  };

  sendPhotoShareEvent = (name: string) => {
    (<any>window).ga("send", "event", {
      eventCategory: "Image Shares",
      eventAction: "Share on " + name,
      eventLabel: "Image Shared " + this.viewedImg,
      eventValue: 0,
    });
  };
}

import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';
import { timeout } from 'q';
import { Location } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  imgUrl: any;
  eventName: string;
  albumData: any;
  index: number;
  click: boolean = false;
  pageUrl: string;
  albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/album?eventName=';
  currentImg: string;
  imgId: string;


  constructor(private route: ActivatedRoute, 
    private albumService: AlbumOverviewService,private routes: Router, private location: Location) { }


  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }


  ngOnInit() {
    $('body').addClass('modal-open');
    this.route.queryParamMap
       .subscribe(params => {
       // this.currentImg = params.get('url') ? params.get('url') : undefined;
        this.eventName = params.get('name');
        this.click = params.get('c') ? true : false;
        this.imgId = params.get('id') ? params.get('id') : undefined;
        this.fetchAlbumData();
      });

    $(window).resize(() => {
      this.reSizeImgCont();
    });
    this.pageUrl = location.href;
    this.reSizeImgCont();
}

fetchAlbumData() {
  this.albumService.getAlbumOverview(this.albumUrl + this.eventName).subscribe(data => {
    if (this.click) {
      this.albumData = data;
      this.currentImg = this.albumData.data[0].url;
      this.index = 0;
      this.imgId = this.albumData.data[this.index]._id;
      this.location.replaceState('/albums?name='+this.eventName+'&url='+this.albumData.data[this.index].url+'&id='+this.albumData.data[this.index]._id);
      this.pageUrl = location.href;
     $('.preload').attr('src', this.albumData.data[1].url);
    } else {
    this.intialiseImageIndex(data);
    }
  });
}

  reSizeImgCont() {
    let offset = window.innerWidth > 980 ? 85 : 0;
    $('.content-block').height(window.innerHeight - offset);
  }

  intialiseImageIndex(data) {
    for (const index in data.data) {
       if (data.data[index]._id === this.imgId) {
        this.albumData = data;
        console.log(index);
        this.index = parseInt(index);
      }
    }
    this.albumData = data;
    this.currentImg = this.albumData.data[this.index].url;
    $('.preload').attr('src', this.albumData.data[this.index+1].url);
  }


  nextImage() {
    if (this.albumData.data.length > (this.index + 1) ) {
      this.imgId = this.albumData.data[this.index + 1]._id;
      this.location.replaceState('/albums?name='+this.eventName+'&url='+this.albumData.data[this.index + 1].url+'&id='+this.albumData.data[this.index + 1]._id);
      this.pageUrl = location.href;
      $('.img1' + this.index).fadeOut(550, () => {
        $('.img1' + this.index).attr('src', this.albumData.data[this.index + 1].url);
        this.index = this.index + 1;
      }).fadeIn(800);
    }
  }

  prevImage() {
    if (this.index >= 1) {
      this.location.replaceState('/albums?name='+this.eventName+'&url='+this.albumData.data[this.index - 1].url+'&id='+this.albumData.data[this.index - 1]._id);
      this.pageUrl = location.href;
      $('.img1' + this.index).fadeOut(550, () => {
        $('.img1' + this.index).attr('src', this.albumData.data[this.index - 1].url);
        this.index = this.index - 1;
      }).fadeIn(1000);
    }
  }

  ngOnDestroy(){
    $('body').removeClass('modal-open');
  }















  // IMAGE MANIPULATION and MAINTAIN ASPECT RATIO
  resizeImageWithAspectRatio() {
    let maxWidth = $('.img-container-album').width(); // Max width for the image
    let maxHeight = $('.img-container-album').height();    // Max height for the image
    let ratio = 0;  // Used for aspect ratio
    let width = $('.img1').width();    // Current image width
    let height = $('.img1').height();  // Current image height

    // Check if the current width is larger than the max
    if (width >= maxWidth) {
      ratio = maxWidth / width;   // get ratio for scaling image
      $('.img1').css('width', maxWidth); // Set new width
      $('.img1').css("height", height * ratio);  // Scale height based on ratio
      height = height * ratio;    // Reset height to match scaled image
      width = width * ratio;    // Reset width to match scaled image
    }

    // Check if current height is larger than max
    if (height >= maxHeight) {
      ratio = maxHeight / height; // get ratio for scaling image
      //$('.img1').css("height", );   // Set new height
      $('.img1').css("width", width * ratio);    // Scale width based on ratio
      width = width * ratio;    // Reset width to match scaled image
    }

  }

  // ngAfterViewInit() {
  // $('#flipbook').turn({
  //   width: 1400,
  //   height: 600,
  //   autoCenter: true
  // });
  //}

  // intialiseFlip() {
  //   $(document).ready(function() {
  //     $('#flipbook').turn({
  //       display: 'single',
  //       width: '100%',
  //       height: 600,
  //       autoCenter: true,
  //       duration:1000,
  //       inclination:90,
  //       gradients:true
  //     });

  //   });
  // }
}
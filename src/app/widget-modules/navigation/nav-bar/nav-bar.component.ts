import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
declare var $: any;
declare var window: any;
var AudioContext = window.AudioContext || false;

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  @Input() playMusic: boolean;
  @Input() audioUrl: string;
  @Input() imageUrl: string;
  @Input() isCollapsed: boolean;
  @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter();
  @Output() isMusicOnChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
  ngOnInit() {
    $(".nav-scroll a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top + 50,
          },
          800,
          function () {}
        );
      }
    });
  }

  sendGA(position) {
    // (<any>window).ga('send', 'pageview', {'page': location.pathname + location.search + position});
    if (position !== "hamburger") {
      $(".nav-scroll a").removeClass("nav-active");
      $(".nav-scroll a[href=#" + position + "]").addClass("nav-active");
    }
    (<any>window).ga("send", "event", {
      eventCategory: "Menu Bar Clicks",
      eventAction: "menu-click: " + position,
      eventLabel: "nav bar",
      eventValue: 0,
    });
  }
  onChange() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
    this.isCollapsedChange.emit(this.isCollapsed);
    $(".navbar-collapse").collapse("hide");
  }

  toggleMusic() {
    this.playMusic = !this.playMusic;
    this.sendMusicEvent();
    if (this.playMusic) {
      $("#player")
        .get(0)
        .play()
        .catch(() => {});
    } else {
      $("#player").get(0).pause();
    }
    if (!this.playMusic) {
      localStorage.setItem("isPausedByUser", "true");
    }
    this.isMusicOnChange.emit(this.playMusic);
  }

  sendMusicEvent = () => {
    (<any>window).ga("send", "event", {
      eventCategory: "Background Music",
      eventAction: this.playMusic ? "Music Resumed" : "Music Paused",
      eventLabel: "Music",
      eventValue: 0,
    });
  };
}

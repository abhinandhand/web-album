import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, EventEmitter, Output} from '@angular/core';
import { isBoolean } from 'util';
declare var $:any;
declare var window:any;
var AudioContext = window.AudioContext || false; 


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  @Input() playMusic: boolean;
  @Input() audioUrl:string;
  @Input() imageUrl: string;
  @Input() isCollapsed: boolean;
  @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter();
  @Output() isMusicOnChange: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }
  ngOnInit() {
  $(".nav-scroll a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: ($(hash).offset().top + 50)
      }, 800, function() {
      });
    }
  });
  setTimeout(() => {
    if (AudioContext) {
      var context = new AudioContext();
      if(context.state === 'running'){
        $('#player').get(0).play();
      } else {
        this.playMusic = !this.playMusic;
      }
      // context.resume().then(() => {
      //   $('#player').get(0).play().then(()=>{
      //    // this.playMusic = !this.playMusic;
      //   })});
      } else {
      $('#player').get(0).play();
     }
     this.isMusicOnChange.emit(this.playMusic);
}, 3000);


  }


  sendGA(position) {
    (<any>window).ga('send', 'pageview', {'page': location.pathname + location.search + position});
    $('.nav-scroll a').removeClass('nav-active');
		$('.nav-scroll a[href=#'+ position +']').addClass('nav-active');
  }
  onChange (){
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
    $('.navbar-collapse').collapse('hide');
  }

  toggleMusic(){
    this.playMusic = !this.playMusic;
    if(this.playMusic) {
      $('#player').get(0).play().catch(() => {
        this.playMusic = !this.playMusic;
        });
    } else{
    $('#player').get(0).pause();
    }
    if(!this.playMusic){
      localStorage.setItem('isPausedByUser', 'true');
    }
    this.isMusicOnChange.emit(this.playMusic);
  }


}

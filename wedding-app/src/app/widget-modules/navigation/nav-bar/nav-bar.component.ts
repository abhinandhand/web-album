import { Component, OnInit, ViewChild, ElementRef,AfterViewInit, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { isBoolean } from 'util';



declare var $:any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() isCollapsed: boolean;
  @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  ngOnInit() {
    $('guestlink').click(function() {
      // $( '#guestbook' ).scroll();
      $('html, body').animate({
        scrollTop: $('#guestbook').offset().top
    }, 1000);
    });
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
  }

  sendGA() {
    setTimeout(() => {
      (<any>window).ga('send', 'pageview', {'page': location.pathname + location.search + location.hash});
     }, 500);
  }
  onChange (){
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  



}

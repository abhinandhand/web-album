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
  $(".nav-scroll a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 800, function() {
      });
    } 
  });
  }

  sendGA(position) {
    (<any>window).ga('send', 'pageview', {'page': location.pathname + location.search + position});
  }
  onChange (){
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
    $('.navbar-collapse').collapse('hide');
  }


}

import { Component, OnInit, ViewChild, ElementRef,AfterViewInit, HostListener, Input } from '@angular/core';



declare var $:any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() imageUrl: string;
  isCollapsed:boolean;
  constructor() { }
  ngOnInit() {
    this.isCollapsed = true;
    $('guestlink').click(function() {
      // $( '#guestbook' ).scroll();
      $('html, body').animate({
        scrollTop: $('#guestbook').offset().top
    }, 1000);
    });
  }

  sendGA() {
    setTimeout(() => {
      (<any>window).ga('send', 'pageview', {'page': location.pathname + location.search + location.hash});
     }, 500);
  }
  onCollapse() {
    alert('jj');
  }

}

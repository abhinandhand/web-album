import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lgScreen: boolean;
  constructor() { }

  ngOnInit() {
    this.reSizeImgCont();
    $(window).resize(() => {
      this.reSizeImgCont();
      });
  }

  

  reSizeImgCont() {
      this.lgScreen = window.innerWidth > 980 ? true : false;
    }

  // fbShare(){
  //   FB.ui({
  //     display: 'popup',
  //     method: 'share',
  //     href: 'https://developers.facebook.com/docs/',
  //   }, function(response){});
  // }

}

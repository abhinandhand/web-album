import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  imgUrl: any;
  eventName: string;
  @Input() albumArray: {albumArt: String, likesCount: String}[];
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params  => {
      this.imgUrl = params.url;
      this.eventName = params.name;
    } );
   // this.route.data.subscribe(v => this.imgUrl = v);
   }

  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  ngOnInit() {
  //   $(document).ready(function() {
  //     $('#flipbook').turn({
  //       width: 1000,
  //       height: 600,
  //       autoCenter: true
  //     });

  // });
}
  ngAfterViewInit() {
    // $('#flipbook').turn({
    //   width: 1400,
    //   height: 600,
    //   autoCenter: true
    // });
  }
}

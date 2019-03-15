import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  @Input() albumArray: {albumArt: String, likesCount: String}[];
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#flipbook').turn({
        width: 1000,
        height: 600,
        autoCenter: true
      });

  });
}
  ngAfterViewInit() {
    $('#flipbook').turn({
      width: 1400,
      height: 600,
      autoCenter: true
    });
  }
}

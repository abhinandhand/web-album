import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';
declare var $:any;

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  imgUrl: any;
  eventName: string;
  albumData : any;
  albumUrl = 'https://gist.githubusercontent.com/SachinBharadwaj/ddfae61610bc3713c39506202e2b2d91/raw/470b93abaeb0f2ee3e55247e77de4c1cc2d36ee5/albumAPI.json';
  
  
  constructor(private route: ActivatedRoute,private albumService: AlbumOverviewService) {
    
  }

  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  fetchAlbumData(){
    this.albumService.getAlbumOverview(this.albumUrl).subscribe(data => {
      this.albumData = data;
      this.intialiseFlip();
      //console.log(this.al);
    });
  }

  ngOnInit() {
    this.route.params.subscribe( params  => {
      this.imgUrl = params.url;
      this.eventName = params.name;
    } );
   // this.route.data.subscribe(v => this.imgUrl = v);
    this.fetchAlbumData();
}
 // ngAfterViewInit() {
    // $('#flipbook').turn({
    //   width: 1400,
    //   height: 600,
    //   autoCenter: true
    // });
  //}

  intialiseFlip() {
    $(document).ready(function() {
      $('#flipbook').turn({
        display: 'single',
        width: '100%',
        height: 600,
        autoCenter: true,
        duration:1000,
        inclination:90,
        gradients:true
      });

    });
  }
}
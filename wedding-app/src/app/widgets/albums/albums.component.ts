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
  albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080';
  
  
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
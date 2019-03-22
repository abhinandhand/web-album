import { Component, OnInit, Input, HostListener, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumOverviewService } from '../app/data-access/album-overview/album-overview.service';
declare var $: any;
declare var onebook: any;
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, AfterViewChecked {
  imgUrl: any;
  eventName: string;
  albumData: any;
  albumUrl = 'https://gist.githubusercontent.com/SachinBharadwaj/ddfae61610bc3713c39506202e2b2d91/raw/470b93abaeb0f2ee3e55247e77de4c1cc2d36ee5/albumAPI.json';
  imgArray = ['https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/203561/pexels-photo-203561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];

  constructor(private route: ActivatedRoute, private albumService: AlbumOverviewService) {

  }

  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  fetchAlbumData() {
    this.albumService.getAlbumOverview(this.albumUrl).subscribe(data => {
      this.albumData = data;
      this.intialiseFlip(this.imgArray);
      //console.log(this.al);
    });
  }

  ngOnInit() {
    $(document).ready(function () {
      var obj = ['https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/203561/pexels-photo-203561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];
      //$('#mybook').onebook(obj);
      $('#mybomok').onebook(obj,{skin:['light','dark'], bgDark:'#56998c url(assets/bg.jpg)',bgLight:'#d97f6f url(assets/bg2.jpg)', border:0, cesh:false});
	
    });
    this.route.params.subscribe(params => {
      this.imgUrl = params.url;
      this.eventName = params.name;
    });
    // this.route.data.subscribe(v => this.imgUrl = v);
    this.fetchAlbumData();
  }
  ngAfterViewChecked() {
    // $('#flipbook').turn({
    //   width: 1400,
    //   height: 600,
    //   autoCenter: true
    // });

    
  }

  intialiseFlip(obj) {
   
    //    $(document).ready(function() {
    //     let obj = ['https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    // 'https://images.pexels.com/photos/203561/pexels-photo-203561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];

    // 			$('#mybook').onebook(obj,{
    // 				flip: 'basic'
    // 			});
    //     /*  $('#flipbook').turn({
    //         display: 'double',
    //         width: '100%',
    //         height: 600,
    //         autoCenter: true,
    //         duration:1000,
    //         inclination:90,
    //         gradients:true
    //       });*/

    //     });
  }
}

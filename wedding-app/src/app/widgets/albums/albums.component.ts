import { Component, OnInit, Input, HostListener, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';
import { timeout } from 'q';
import { Location } from '@angular/common';
declare var $: any;
declare var pinchzoomer: any;

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy, AfterViewChecked {
  imgUrl: any;
  eventName: string;
  albumData: any;
  index: number;
  click: boolean = false;
  pageUrl: string;
  lgScreen:number;
  albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/album?eventName=';
  currentImg: string;
  imgId: string;
  pinchZommerInitalised = false;


  constructor(private route: ActivatedRoute,
    private albumService: AlbumOverviewService, private routes: Router, private location: Location) { }


  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  ngAfterViewChecked() {
    //  $('.in').pinchzoomer();
  }


  ngOnInit() {
    $('#exampleModal').ontouchmove = (e) => { e.preventDefault(); return false; };
    $('body').addClass('modal-open');
    $('.placeholder-img').removeClass('non-opaque');
    this.route.queryParamMap
      .subscribe(params => {
        // this.currentImg = params.get('url') ? params.get('url') : undefined;
        this.eventName = params.get('name');
        this.click = params.get('c') ? true : false;
        this.imgId = params.get('id') ? params.get('id') : undefined;
        $('.modal-trans').css('transform-origin', params.get('x') + 'px' + ' ' + params.get('y') + 'px');
        setTimeout(()=>{
          $('.modal-trans').addClass('modal-trans-opacity');
          },200);
        //console.log();
        this.fetchAlbumData();
      });
     

    $(window).resize(() => {
      this.reSizeImgCont();
    });
    this.pageUrl = location.href;
    this.reSizeImgCont();
    $('#wish-wel-button').on('click',()=>{
			document.getElementById('welcome-screen').style.display = 'none';
			$('#player').get(0).play();
			$('#body-tag').css('overflow-y', 'scroll');
			document.getElementById('window-app').classList.add('window-load');
			document.getElementById('window-app').style.visibility = 'visible';
		});
  }

  encoderTwitterURL() {
   // console.log(this.pageUrl.toString());
   return ('https://twitter.com/intent/tweet?text=AaronDiyaWedding%26url=' + encodeURI( this.pageUrl.toString()));
  }

  fetchAlbumData() {
    this.albumService.getAlbumOverview(this.albumUrl + this.eventName).subscribe((data: any) => {
      if (this.click) {
        this.albumData = data;
        this.currentImg = this.albumData.data[0].url;
        this.index = 0;
        this.imgId = this.albumData.data[this.index]._id;
        this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index].url + '&id=' + this.albumData.data[this.index]._id);
        this.pageUrl = location.href;
        $('.preload').attr('src', this.albumData.data[1].url);
      } else {
        this.intialiseImageIndex(data);
      }
      console.log($('.img1' + this.index));
      $('.img1' + this.index.toString()).addClass('opaque');
      $('.trans').addClass('trans-height');


      $('.in').on('load', () => {
        if(!this.pinchZommerInitalised){
          $('.in').pinchzoomer();
          this.pinchZommerInitalised = true;
        }
      });
    });
  }
  checkBgLoaded(){
    setTimeout(()=>{
      $('.placeholder-img').addClass('non-opaque');
    },2000);
  }

  reSizeImgCont() {
    this.lgScreen = window.innerWidth > 980 ? 85 : 0;
    $('.content-block').height(window.innerHeight - this.lgScreen );
    //$(window).PinchZoomer.init();
  }

  intialiseImageIndex(data) {
    for (const index in data.data) {
      if (data.data[index]._id === this.imgId) {
        this.albumData = data;
        console.log(index);
        this.index = parseInt(index);
      }
    }
    this.albumData = data;
    this.currentImg = this.albumData.data[this.index].url;
    $('.preload').attr('src', this.albumData.data[this.index + 1].url);
  }


  nextImage() {
    if (this.albumData.data.length > (this.index + 1)) {
      this.imgId = this.albumData.data[this.index + 1]._id;
      this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index + 1].url + '&id=' + this.albumData.data[this.index + 1]._id);
      this.pageUrl = location.href;
      this.index = this.index + 1;
    }
  }

  prevImage() {
    if (this.index >= 1) {
      this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index - 1].url + '&id=' + this.albumData.data[this.index - 1]._id);
      this.pageUrl = location.href;
      this.index = this.index - 1;
      // $('.img1' + this.index).fadeOut(550, () => {
      //   $('.img1' + this.index).attr('src', this.albumData.data[this.index - 1].url);
      //   $('.in').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
      //   this.index = this.index - 1;
      // }).fadeIn(1000);
    }
  }

  ngOnDestroy() {
    $('body').removeClass('modal-open');
  }

  goToPage() {
    $('.modal-trans').removeClass('modal-trans-opacity');
    setTimeout(() => {
      this.routes.navigate(['/']);
    }, 1000);
  }
}

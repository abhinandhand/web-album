import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';
import { timeout } from 'q';
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
  index: number;
  albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/album?eventName=';
  currentImg: string;
  
  
  constructor(private route: ActivatedRoute,private albumService: AlbumOverviewService) {}
  

  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  fetchAlbumData(){
    this.albumService.getAlbumOverview(this.albumUrl+this.eventName).subscribe(data => {
      this.albumData = data;
      this.intialiseImage();
      //this.intialiseFlip();
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
    // $(window).resize(()=>{
    //   this.resizeImg();
    // });
}


//  $(window).resize(function (){
//   this.resizeImageWithAspectRatio();
//  })
resizeImg(index){
  let maxWidth = $('.img-container-album').width(); // Max width for the image
let maxHeight = $('.img-container-album').height() ;    // Max height for the image
let ratio = 0;  // Used for aspect ratio
let width =  $('.img1' + index).width();    // Current image width
let height = $('.img1' + index).height();  // Current image height

// Check if the current width is larger than the max
// if(width >= maxWidth){
  if(true){
  ratio = maxWidth / width;   // get ratio for scaling image
  $('.img1' + index).css('width', maxWidth); // Set new width
  $('.img1' + index).css("height", height * ratio);  // Scale height based on ratio
  height = height * ratio;    // Reset height to match scaled image
  width = width * ratio;    // Reset width to match scaled image
}

// Check if current height is larger than max
if(height >= maxHeight){
  ratio = maxHeight / height; // get ratio for scaling image
  //$('.img1').css("height", );   // Set new height
  $('.img1').css("width", width * ratio);    // Scale width based on ratio
  width = width * ratio;    // Reset width to match scaled image
 }

}
intialiseImage() {
  this.index = 0;
  this.currentImg = this.albumData.data[this.index].url;
  setTimeout(() => {
    this.resizeImg(this.index);
   },50);

  //this.resizeImageWithAspectRatio();
  $('.img1'+this.index).load(() => {
    this.resizeImg(this.index);
  });
}


 nextImage() {
   this.index = this.index + 1;
   setTimeout(() => {
    this.resizeImg(this.index);
   },100);
  //this.currentImg = this.albumData.data[index].url;
 }

 prevImage() {
  this.index = this.index - 1;
  setTimeout(() => {
    this.resizeImg(this.index);
   },100);
  //this.currentImg = this.albumData.data[index + 1].url;
 }












// IMAGE MANIPULATION and MAINTAIN ASPECT RATIO
resizeImageWithAspectRatio() {
	let maxWidth = $('.img-container-album').width(); // Max width for the image
	let maxHeight = $('.img-container-album').height() ;    // Max height for the image
	let ratio = 0;  // Used for aspect ratio
	let width =  $('.img1').width();    // Current image width
	let height = $('.img1').height();  // Current image height
 
	// Check if the current width is larger than the max
	if(width >= maxWidth){
		ratio = maxWidth / width;   // get ratio for scaling image
		$('.img1').css('width', maxWidth); // Set new width
		$('.img1').css("height", height * ratio);  // Scale height based on ratio
		height = height * ratio;    // Reset height to match scaled image
		width = width * ratio;    // Reset width to match scaled image
	}
 
	// Check if current height is larger than max
	if(height >= maxHeight){
		ratio = maxHeight / height; // get ratio for scaling image
		//$('.img1').css("height", );   // Set new height
		$('.img1').css("width", width * ratio);    // Scale width based on ratio
		width = width * ratio;    // Reset width to match scaled image
   }
   
}

 // ngAfterViewInit() {
    // $('#flipbook').turn({
    //   width: 1400,
    //   height: 600,
    //   autoCenter: true
    // });
  //}

  // intialiseFlip() {
  //   $(document).ready(function() {
  //     $('#flipbook').turn({
  //       display: 'single',
  //       width: '100%',
  //       height: 600,
  //       autoCenter: true,
  //       duration:1000,
  //       inclination:90,
  //       gradients:true
  //     });

  //   });
  // }
}
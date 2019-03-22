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
  albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/album?eventName=';
  
  
  constructor(private route: ActivatedRoute,private albumService: AlbumOverviewService) {
    
  }

  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  fetchAlbumData(){
    this.albumService.getAlbumOverview(this.albumUrl+this.eventName).subscribe(data => {
      this.albumData = data;
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
}
// IMAGE MANIPULATION and MAINTAIN ASPECT RATIO
resizeImageWithAspectRatio() {
	var maxWidth = $('.img-container-album').width; // Max width for the image
	var maxHeight = 75;    // Max height for the image
	var ratio = 0;  // Used for aspect ratio
	var width = img.width();    // Current image width
	var height = img.height();  // Current image height
 
	// Check if the current width is larger than the max
	if(width > maxWidth){
		ratio = maxWidth / width;   // get ratio for scaling image
		img.css("width", maxWidth); // Set new width
		img.css("height", height * ratio);  // Scale height based on ratio
		height = height * ratio;    // Reset height to match scaled image
		width = width * ratio;    // Reset width to match scaled image
	}
 
	// Check if current height is larger than max
	if(height > maxHeight){
		ratio = maxHeight / height; // get ratio for scaling image
		img.css("height", maxHeight);   // Set new height
		img.css("width", width * ratio);    // Scale width based on ratio
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
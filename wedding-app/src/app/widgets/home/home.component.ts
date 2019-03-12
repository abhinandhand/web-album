import { Component, OnInit, Input } from '@angular/core';
import { WeddingOverviewService } from '../../data-access/wedding-overview/wedding-overview.service';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() weddingObj: any;
  constructor(public wedOverviewService: WeddingOverviewService) { }
  wedddingOverviewData: any;
  isSetBoolean = true;
  ngOnInit() {
    this.fetchWedOverview();
    $('#bg-image').on('load',function(){
     $('.parent-container').css({'top' : $('#bg-image').height()});
    });
    $(window).on('load' , (function() {
    $('.parent-container').css({'top' : $('#bg-image').height()});
    }));
    $( window ).resize(function() {
      $('.parent-container').css({'top' : $('#bg-image').height()});
    });
    // function setContainer () {
    //   /*parent container deciding top position*/
    //   $('.parent-container').css({'top' : $('#bg-image').height()});
    //   /*couple container deciding height*/
    //   $('.couple-container').height($('.con-event-container').height() +
    //   $('.duration-summary').height() + $('#con-album-label').height() -95);
    // }
  }

  

  fetchWedOverview() {
    this.wedOverviewService.getWeddingOverview().subscribe(data => {
      this.wedddingOverviewData = data;
      this.setGuestBookWishes(Event);
    });
  };

  
  setGuestBookWishes($event) {
    console.log('called');
    var wishData : any = {};
    let count = 0;
    this.wedOverviewService.getWishes().subscribe(data => {
      wishData = data;
      if(this.isSetBoolean){
        $('#word').text(wishData.data.wishList[0].message);
        this.isSetBoolean = false;
        setInterval(function() {
          count++;
          $('#word').fadeOut(400, function() {
            $(this).text(wishData.data.wishList[count % wishData.data.wishList.length].message).fadeIn(400);
          });
        }, 5000);
      }

    });
  
  }

  

}

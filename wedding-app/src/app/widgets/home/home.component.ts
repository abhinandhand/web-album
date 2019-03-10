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
    
    window.onload = (function() {
      /*parent container deciding top position*/
$('.parent-container[_ngcontent-c1]').css({'top' : $('#bg-image').height()});
/*couple container deciding height*/
$('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
$('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height()+
$('#bottom-mandala[_ngcontent-c7]').height() - 95);
      setTimeout(() => {
/*parent container deciding top position*/
$('.parent-container[_ngcontent-c1]').css({'top' : $('#bg-image').height()});
/*couple container deciding height*/
$('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
$('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height()+
$('#bottom-mandala[_ngcontent-c7]').height() - 95);
      },1000);
    });
    $( window ).resize(function() {
     setContainer();
    });
    this.fetchWedOverview();
    function setContainer () {
      /*parent container deciding top position*/
      $('.parent-container[_ngcontent-c1]').css({'top' : $('#bg-image').height()});
      /*couple container deciding height*/
      $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
      $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height()+
      $('#bottom-mandala[_ngcontent-c7]').height() - 95);
    }
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

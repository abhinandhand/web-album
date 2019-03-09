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
  ngOnInit() {
    this.fetchWedOverview();
    window.onload = (function() {
      /*parent container deciding top position*/
      $('.parent-container[_ngcontent-c1]').css({'top' : $('#bg-image').height()});
      /*couple container deciding height*/
      $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
      $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height()+
      $('#bottom-mandala[_ngcontent-c7]').height() - 95);
    });
    $( window ).resize(function() {
     /*parent container deciding top position*/
     $('.parent-container[_ngcontent-c1]').css({'top' : $('#bg-image').height()});
     /*couple container deciding height*/
     $('.couple-container[_ngcontent-c1]').height($('.con-event-conatiner[_ngcontent-c3]').height() +
     $('#marriage-date-summary[_ngcontent-c6]').height() + $('#con-album-label[_ngcontent-c3]').height()+
     $('#bottom-mandala[_ngcontent-c7]').height() - 95);
    });
  }

  fetchWedOverview() {
    this.wedOverviewService.getWeddingOverview().subscribe(data => {
      this.wedddingOverviewData = data;
      this.setGuestBookWishes(data);
    });
  }

  setGuestBookWishes(data) {
    let count = 0;

  $("#word").text(data.data.guestWishes[0].message);
    setInterval(function() {
      count++;
      $("#word").fadeOut(400, function() {
        $(this).text(data.data.guestWishes[count % data.data.guestWishes.length].message).fadeIn(400);
      });
    }, 5000);
  }

  

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishForm } from './wish-form';
import { WeddingOverviewService } from '../../data-access/wedding-overview/wedding-overview.service';
import { element } from 'protractor';
declare var $: any;
declare var turn: any;
var isPrevious: boolean = false;
var defaultInterval;

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {

  @Output() sendWishEvent = new EventEmitter<string>();
  wishes: any = [{}];
  showForm: boolean = true;
  showConfirmMsg = false;
  wishObj: any = {};
  constructor(public wedOverviewService: WeddingOverviewService) { }
  ngOnInit() {
    this.setGuestBookWishes();
  }

  setGuestBookWishes() {
    this.wedOverviewService.getWishes().subscribe(data => {
      this.wishes = data;
      this.initialiseGuestBookTurn(data);
    });
  }

  initialiseGuestBookTurn(wishArray) {
    setTimeout(() => {
      $('#guest-book-turn').turn({
        display: 'single',
        width: '90%',
        height: 604,
        autoCenter: true,
        duration: 1400,
        when: {
          turned: function (e, page, pageObj) {
            if (wishArray.data.wishList.length === page) {
              clearInterval(defaultInterval);
            }
          }
        }
      });
    }, 100);

    defaultInterval = setInterval(() => {
      $('#guest-book-turn').turn('next');
      // if(isPrevious){
      //   $('#guest-book-turn').turn('previous');
      // }else {
      //   $('#guest-book-turn').turn('next');
      // }
    }, 5000);
  };

  refreshWishes() {
    this.sendWishEvent.emit('true');
  }

  onSubmit() {
    this.showForm = false;
    this.showConfirmMsg = true;
    setTimeout(() => {
      $('#confirmModal').modal('show');
    }, 500);
    this.postWish();
  }

  postWish() {
    return this.wedOverviewService.sendWishes(this.wishObj).subscribe(
      data => {
        console.log(data);
        setTimeout(() => {
          this.refreshWishes();
        }, 5000);
      }, error => {
        console.log(error);
      }
    );
  }

  iAgree(wishes) {
    clearInterval(defaultInterval);
    let element = $(`<div style="background: url(assets/book.jpg); background-repeat: no-repeat;">
    <div style="height: 100%;padding: 0px 98px;">
    <div style="position: absolute;left: 27%;width: 61%;top: 10%;overflow-y:
    scroll;height: 54%;justify-content: center;align-items: center;display: flex;">
          <h1 style="color: #707070; font-family: Great Vibes, Regular; font-size: 44px; line-height: 83px; text-align: center;">`
      + this.wishObj.message + `</h1>
      </div>
      <div style="width: max-content;position: absolute;right: 13%;position: absolute; bottom: 14%;">
        <p style="font-family: Playfair Display, Bold;font-size: 25px;text-align: center;color: #707070;margin-bottom: 2px;">`
      + this.wishObj.name + `</p>
      <p style="text-align: center; font-family: Playfair Display;font-style: italic;font-size: 18px;: #707070;margin-bottom: 2px;">`
      + this.wishObj.location + `</p>
      </div>
    </div>
    <div>
    </div>
  </div>`);
    $('#guest-book-turn').turn('addPage', element);
    $('#guest-book-turn').turn('page', wishes.length);
    setTimeout(() => {
      isPrevious = true;
      this.showForm = false;
      this.showConfirmMsg = false;
      var submitInterval = setInterval(() => {
        if($('#guest-book-turn').turn('page') === 1) {
          clearInterval(submitInterval);
        }
        $('#guest-book-turn').turn('previous');
      }, 5000);
    }, 3000);
  }
  /*
  // console.log('called');
  //   var wishData : any = {};
  //   let count = 0;
  // if(this.isSetBoolean) {
  //   $('#word').text(wishData.data.wishList[0].message);
  //   this.isSetBoolean = false;
  //   setInterval(function() {
  //     count++;
  //     $('#word').fadeOut(400, function() {
  //       $(this).text(wishData.data.wishList[count % wishData.data.wishList.length].message).fadeIn(400);
  //     });
  //   }, 5000);
  // }*/


}

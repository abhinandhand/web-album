import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
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
  styleUrls: ['./guest-book.component.css'],
  encapsulation: ViewEncapsulation.None
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
  sizeFlipBook(){

  }
  initialiseGuestBookTurn(wishArray) {
    setTimeout(() => {
      $('#guest-book-turn').turn({
        display: 'single',
        width: $('#guest-book-cont').width() - 20,
        height: $('#guest-book-cont').height(),
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

    $(window).resize(() => {
      $('#guest-book-turn').turn('size', $('#guest-book-cont').width() - 20, $('#guest-book-cont').height() - 20);
      $('#guest-book-turn').turn('resize');
    });
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
    let element = $( `<div>
    <img style="position: absolute;height: 100%;width: 100%" class="img-fluid gb-img d-none d-sm-one d-md-block" src="assets/book.jpg">
    <img style="position: absolute;height: 100%;width: 100%" class="img-fluid gb-img d-block d-sm-block d-md-none" src="assets/mobile.png">
    <div style="height: 100%;padding: 0px 98px;">
      <div class="guest-book-wish-text">
        <h1 class="wish-style">` + this.wishObj.message + `</h1></div>
        <div style="width: max-content;position: absolute;right: 13%;position: absolute; bottom: 14%;">
          <p style="font-family: Playfair Display, Bold;font-size: 25px;text-align: center;color: #707070;margin-bottom: 2px;">` +
          this.wishObj.name +`</p>
          <p style="text-align: center; font-family: Playfair Display;font-style: italic;font-size: 18px;: #707070;margin-bottom: 2px;">`
          + this.wishObj.location + `</p>
          </div>
        </div>
        <div>`
      );
     $('#guest-book-turn').turn('resize');
    $('#guest-book-turn').turn('addPage', element);
    $('#guest-book-turn').turn('page', wishes.length + 1);
    setTimeout(() => {
      isPrevious = true;
      this.showForm = false;
      this.showConfirmMsg = false;
      var submitInterval = setInterval(() => {
        if($('#guest-book-turn').turn('page') === 1) {
          clearInterval(submitInterval);
        }
        $('#guest-book-turn').turn('resize');
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

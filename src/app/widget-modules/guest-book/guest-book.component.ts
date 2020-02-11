import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { WishForm } from './wish-form';
import { WeddingOverviewService } from '../../data-access/wedding-overview/wedding-overview.service';
import { element } from 'protractor';
declare var $: any;
declare var turn: any;
var isPrevious: boolean = false;
var defaultInterval;
var submitInterval ;

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GuestBookComponent implements OnInit {

  @Input() playMusic: boolean;
  @Output() isMusicOnChange: EventEmitter<boolean> = new EventEmitter();
  
  wishes: any = [{}];
  showForm: boolean = true;
  showConfirmMsg = false;
  wishObj: any = {};
  constructor(public wedOverviewService: WeddingOverviewService) { }
  ngOnInit() {
    this.setGuestBookWishes();
    $('#new-wish-btn').click(() => {
      alert();
      this.goPrevious();
    });
  }


  setGuestBookWishes() {
    this.wedOverviewService.getWishes().subscribe((data: any) => {
      this.wishes = data;
      this.initialiseGuestBookTurn(data);
    });
  }

  clearTimer() {
    clearInterval(defaultInterval);
    clearInterval(submitInterval);
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
    }, 100000);
  };


  goNext() {
    this.sendGuestBookViewEvent('next');
    $('#guest-book-turn').turn('next');
    this.clearTimer();
  }

  goPrevious(){
    this.sendGuestBookViewEvent('previous');
    $('#guest-book-turn').turn('previous');
    this.clearTimer();
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
    this.iAgree(this.wishes.data.wishList);
    return this.wedOverviewService.sendWishes(this.wishObj).subscribe(
      (data: any) => {
        this.sendPostWishEvent(this.wishObj.name,this.wishObj.message);
        setTimeout(() => {
        }, 5000);
      }, error => {
        console.log(error);
      }
    );
  }

  iAgree(wishes) {
    clearInterval(defaultInterval);
    let element = $( `<div>
    <img style="position: absolute;height: 100%;width: 100%" class="img-fluid gb-img d-none d-sm-none d-md-block" src="assets/guest-book.png">
    <img style="position: absolute;height: 100%;width: 100%" class="img-fluid gb-img d-block d-sm-block d-md-none" src="assets/guest-mobile.png">
    <div style="height: 100%;padding: 0px 98px;">
    <div  id="new-wish-btn" class="left-arrow" onclick="$('#guest-book-turn').turn('previous');"  >
                  <i class="fa fa-chevron-circle-left" style="cursor: pointer;"></i>
              </div>
      <div class="guest-book-wish-text">
        <h1 class="wish-style">` + this.wishObj.message + `</h1></div>
        <div class="guest-wisher-info">
          <p class="guest-info">` +
          this.wishObj.name +`</p>
          <p class="loc-date">`
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
      submitInterval = setInterval(() => {
        if($('#guest-book-turn').turn('page') === 1) {
          clearInterval(submitInterval);
        }
        $('#guest-book-turn').turn('resize');
        $('#guest-book-turn').turn('previous');
      }, 100000);
    }, 3000);
  }
  playAudio(){
    if(localStorage.getItem('isPausedByUser') !== 'true') {
    //let context = new AudioContext();
    $('#player').get(0).play();
    this.playMusic = true;
    this.isMusicOnChange.emit(this.playMusic);
    }
  }

  sendGuestBookViewEvent = (clickType: string) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Guestbook clicks',
      eventAction: 'Viewed ' + clickType + 'wish',
      eventLabel: 'Guestbook clicks',
      eventValue: 0
    });
  }

  sendPostWishEvent = (wisherName: string, msg:string) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Wished Diya & Aron',
      eventAction: 'Wish by ' + wisherName,
      eventLabel: 'Wish Msg: ' + msg ,
      eventValue: 0
    });
  }

  sendPostWishEditEvent = (wisherName: string, msg:string) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Wishes Edited',
      eventAction: 'Wish Edited by ' + wisherName,
      eventLabel: 'Wish Edited: ' + msg ,
      eventValue: 0
    });
  }





}

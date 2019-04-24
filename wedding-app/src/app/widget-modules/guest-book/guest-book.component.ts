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
  }

  setGuestBookWishes() {
    this.wedOverviewService.getWishes().subscribe((data: any) => {
      this.wishes = data;
      this.initialiseGuestBookTurn(data);
    });
  }
  sizeFlipBook(){

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
    }, 5000);
  };


  goNext() {
    $('#guest-book-turn').turn('next');
    this.clearTimer();
  }

  goPrevious(){
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
        console.log(data);
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
    <img style="position: absolute;height: 100%;width: 100%" class="img-fluid gb-img d-none d-sm-one d-md-block" src="assets/dtop.png">
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
      submitInterval = setInterval(() => {
        if($('#guest-book-turn').turn('page') === 1) {
          clearInterval(submitInterval);
        }
        $('#guest-book-turn').turn('resize');
        $('#guest-book-turn').turn('previous');
      }, 6000);
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



}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishForm } from './wish-form';
import { WeddingOverviewService } from '../../data-access/wedding-overview/wedding-overview.service';


declare var $:any;

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {

  @Output() sendWishEvent = new EventEmitter<string>();
  showForm: boolean = true;
  showConfirmMsg = false;
  wishObj: any= {};
  constructor(public wedOverviewService: WeddingOverviewService) { }
  ngOnInit() {

  }

  refreshWishes(){
    this.sendWishEvent.emit('true');
  }

  onSubmit() {
    this.showForm = false;
    this.showConfirmMsg = true;
    $('#word').text(this.wishObj.message);
    this.postWish();
    setTimeout(() => {
      this.showForm = false;
      this.showConfirmMsg = false;
 }, 10000);
  }

  postWish () {
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
}

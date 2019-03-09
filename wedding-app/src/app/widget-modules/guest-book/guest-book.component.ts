import { Component, OnInit } from '@angular/core';
import { WishForm } from './wish-form';
declare var $:any;

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {
  
  showForm: boolean = true;
  showConfirmMsg = false;
  wishObj: any= {};
  constructor() { }
  
  ngOnInit() {
    
  }

  onSubmit() {
    
    this.showForm = false;
    this.showConfirmMsg = true;
    setTimeout(() => {
      this.showForm = false;
      this.showConfirmMsg = false;
      $("#word").text(this.wishObj.message);
 }, 30000);
  }

  
}

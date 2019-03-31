import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-couplestory',
  templateUrl: './couplestory.component.html',
  styleUrls: ['./couplestory.component.css']
})
export class CouplestoryComponent implements OnInit {
  
  @Input() imageUrl: any;

  togetherMonth: number;
  togetherYear: number;
  constructor() { }

  ngOnInit() {
    this.monthDiff(new Date(2019, 1, 10), new Date());
  }

  monthDiff(d1, d2) {
    let months;
    let timeDiff = d2 - d1;
// yourOldDate may be is coming from DB, for example, but it should be in the correct format ("MM/dd/yyyy hh:mm:ss:fff tt")

    let years = Math.floor((timeDiff) / (1000 * 60 * 60 * 24 * 365));
    timeDiff = Math.floor((timeDiff) % (1000 * 60 * 60 * 24 * 365));
    months = Math.floor((timeDiff) / (1000 * 60 * 60 * 24 * 30));
    timeDiff = Math.floor((timeDiff) % (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((timeDiff) / (1000 * 60 * 60 * 24));
    console.log(days)
    // months = (d2.getFullYear() - d1.getFullYear()) * 12;
    // months -= d1.getMonth() + 1;
    // months += d2.getMonth();
    if (years) {
      this.togetherYear = years;
    } else {
      if (days === 29) {
        this.togetherMonth = months + 1 ;
      } else {
        this.togetherMonth = months;
      }
    }
    // if (months <= 0){
    //   const timeDiff = Math.abs(d2.getTime() - d1.getTime());
    //   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    //   console.log(diffDays);
    // } else {
    //   console.log(months <= 0 ? 0 : months);
    // }
}

}

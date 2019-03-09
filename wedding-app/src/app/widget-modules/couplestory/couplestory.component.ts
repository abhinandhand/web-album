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
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    if (months >= 12) {
      this.togetherYear = Math.floor(months / 12);
    } else {
      this.togetherMonth = months <= 0 ? 0 : months;
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

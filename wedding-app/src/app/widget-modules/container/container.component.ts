import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() weddingData: any;
  @Input() playMusic: boolean;
  @Output() isMusicOnChange: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  playAudio(){
    if(localStorage.getItem('isPausedByUser') !== 'true') {
    let context = new AudioContext();
    $('#player').get(0).play();
    this.playMusic = true;
    this.isMusicOnChange.emit(this.playMusic);

    }
  }
 
}

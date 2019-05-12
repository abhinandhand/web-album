import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-wedding-events',
  templateUrl: './wedding-events.component.html',
  styleUrls: ['./wedding-events.component.css']
})
export class WeddingEventsComponent  {
  @Input() playMusic: boolean;
  @Output() isMusicOnChange: EventEmitter<boolean> = new EventEmitter();
  @Input() weddingEventList: {title: string, background:  string, action: string, type: string}[];
  albumOverviewData: any;
  constructor(private albumOverviewService: AlbumOverviewService, private route: Router) { }

  fetchAlbum(albumUrl) {
    this.albumOverviewService.getAlbumOverview(albumUrl).subscribe(data => {
      this.albumOverviewData = data;
    }
    );
  }
  goToPage(event,url,$event) {
    this.sendAlbumVisitEvent(event);
    this.route.navigate(['/albums'], { queryParams: { name: event,  c: true, x:$event.x, y: $event.y, url: url } });
}

sendAlbumVisitEvent = (name: string) => {
  (<any>window).ga('send', 'event', {
    eventCategory: 'Album visits',
    eventAction: 'Viewed Album ' + name,
    eventLabel: 'Album visits',
    eventValue: 0
  });
}



}

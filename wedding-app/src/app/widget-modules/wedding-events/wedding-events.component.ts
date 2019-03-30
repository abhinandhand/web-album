import { Component, OnInit, Input} from '@angular/core';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wedding-events',
  templateUrl: './wedding-events.component.html',
  styleUrls: ['./wedding-events.component.css']
})
export class WeddingEventsComponent  {

  @Input() weddingEventList: {title: string, background:  string, action: string, type: string}[];
  albumOverviewData: any;
  constructor(private albumOverviewService: AlbumOverviewService, private route: Router) { }

  fetchAlbum(albumUrl) {
    this.albumOverviewService.getAlbumOverview(albumUrl).subscribe(data => {
      this.albumOverviewData = data;
    }
    );
  }
  goToPage(event,url) {
    this.route.navigate(['/albums'], { queryParams: { name: event, url: url, c: true } });
}
}

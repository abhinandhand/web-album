import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';

@Component({
  selector: 'app-wedding-events',
  templateUrl: './wedding-events.component.html',
  styleUrls: ['./wedding-events.component.css']
})
export class WeddingEventsComponent implements AfterContentChecked {

  @Input() weddingEventList: {title: string, background:  string, action: string, type: string}[];
  albumOverviewData: any;
  constructor(private albumOverviewService: AlbumOverviewService) { }

  fetchAlbum(albumUrl) {
    this.albumOverviewService.getAlbumOverview(albumUrl).subscribe(data => {
      this.albumOverviewData = data;
    }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumOverviewService {
  constructor(private http: HttpClient) { }

  getAlbumOverview(url) {
    return this.http.get(url);
  }
}

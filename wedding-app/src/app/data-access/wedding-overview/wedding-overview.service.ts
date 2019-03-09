import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeddingOverviewService {
  endpoint = 'https://gist.githubusercontent.com/SachinBharadwaj/18001dbea2aaacb97ac6ec23b3585d43/raw/af9015cbb33636b5830bf2e4dff7d339793839b8/index.json';
  constructor(private http: HttpClient) { }

  getWeddingOverview() {
    console.log(this.http.get(this.endpoint));
    return this.http.get(this.endpoint);
  }

}

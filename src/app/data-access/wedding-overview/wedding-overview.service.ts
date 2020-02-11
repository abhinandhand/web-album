import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeddingOverviewService {
  // endpoint = 'https://gist.githubusercontent.com/SachinBharadwaj/18001dbea2aaacb97ac6ec23b3585d43/raw/af9015cbb33636b5830bf2e4dff7d339793839b8/index.json';
 // endpoint = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/';
 endpoint='http://ec2-13-233-223-187.ap-south-1.compute.amazonaws.com:8080/'
  constructor(private http: HttpClient) { }

  getWeddingOverview() {
    return this.http.get(this.endpoint);
  }

  sendWishes(data) {
    return this.http.post(this.endpoint + 'guestbook', data);
  }

  getWishes() {
   return this.http.get(this.endpoint + 'guestbook');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeddingOverviewService {
  endpoint = 'http://ec2-54-191-183-21.us-west-2.compute.amazonaws.com:8080/';
  constructor(private http: HttpClient) { }

  getWeddingOverview() {
    console.log(this.http.get(this.endpoint));
    return this.http.get(this.endpoint);
  }

  sendWishes(data) {
    return this.http.post(this.endpoint + 'guestbook', data);
  }

  getWishes() {
    return this.http.get(this.endpoint + 'guestbook');
  }

}

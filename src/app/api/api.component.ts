import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  loadedPosts = [];
  public apiUrl = 'localhost:3000'

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post(
      `${this.apiUrl}/posts`,
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.http.get(
      `${this.apiUrl}/posts`
    ).subscribe(data => {
      console.log(data);
    });
  }

  onClearPosts() {
    // Send Http request
  }

}

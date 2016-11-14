import { Component, OnInit } from '@angular/core';

import { HttpTestService } from '../http-test.service';

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  getData: string;
  postData: string;

  constructor(private _httpService: HttpTestService) {}

  ngOnInit() {
  }

  testGetRequest() {
    this._httpService.getCurrentTime().subscribe(
      // what to do with response data
      data => this.getData = JSON.stringify(data),
      // what to do with errors
      error => alert(error),
      // what function to call upon completion
      () => console.log("Get Request completed")
    );
  }
}

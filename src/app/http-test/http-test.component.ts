import { Component, OnInit } from '@angular/core';

import { HttpTestService } from '../http-test.service';

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  
  constructor(private _httpService: HttpTestService) { }

  ngOnInit() {
  }

  getData: string;
  getPost: string;

  testGetRequest() {
    
  }
}

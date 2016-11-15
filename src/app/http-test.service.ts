import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService {

  constructor(private _http:Http) { }

  getCurrentTime() {
    return this._http.get('http://date.jsontest.com/')
      .map(response => response.json());
  }

  postJSON() {
    // We can validate by going to http://validate.jsontest.com/?json={"key":"value"
    var json_validation = JSON.stringify({key: 'testKey', value: 5});
    var params = 'json=' + json_validation;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(
      'http://validate.jsontest.com',
      params,
      {
        headers: headers
      }
    )
    .map(response => response.json());
  }
}

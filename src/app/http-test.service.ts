import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpTestService {

  constructor(private _http:Http) { }

  getCurrentTime() {
    return this._http.get('http://date.jsontest.com/');
  }

  postJSON() {

  }
}

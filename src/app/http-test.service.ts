import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpTestService {
  
  constructor(private http:Http) { }

}

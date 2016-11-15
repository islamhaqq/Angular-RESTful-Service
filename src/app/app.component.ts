import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJS RESTful Service';
  description = 'REST API obtained from http://www.jsontest.com/';
  summary = 'Demonstrating implementation of Angular 2 HTTP Service to connect to a RESTful service and send GET and POST requests, as well as how to handle responses';
}

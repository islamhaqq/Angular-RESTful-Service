import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import { HttpTestService} from './http-test.service';

@NgModule({
  declarations: [
    AppComponent,
    HttpTestComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

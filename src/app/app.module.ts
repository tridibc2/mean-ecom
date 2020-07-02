import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './client/components/client.module';

import { AppComponent } from './app.component';
import { MainComponent } from './client/components/main/main.component';
import { ErrorPageComponent } from './client/components/error-page/error-page.component';




/*import { PagesModule } from './client/pages/pages.module';
import { SharedModule } from './client/shared/shared.module';
import { AdminModule } from './admin/admin.module'; */


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ErrorPageComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ClientModule,
    AppRoutingModule,
    NgxImgZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

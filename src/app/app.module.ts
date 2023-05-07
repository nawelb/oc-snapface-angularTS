import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr'

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { SnapFaceListComponent } from './snap-face-list/snap-face-list.component';
import { HeaderComponent } from './header/header.component';
import { appRoutingModule } from './app-routing.module';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { RouterModule } from '@angular/router';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    SnapFaceListComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "fr-FR"},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }

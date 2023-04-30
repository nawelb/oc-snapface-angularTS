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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    SnapFaceListComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule, 
    RouterModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "fr-FR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }

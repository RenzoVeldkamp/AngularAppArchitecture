import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileSummaryComponent } from './home-page/profile-summary/profile-summary.component';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    ProfileSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    HomeService
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

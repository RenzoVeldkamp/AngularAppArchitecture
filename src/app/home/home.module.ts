import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileSummaryComponent } from './home-page/profile-summary/profile-summary.component';
import { HomeDataService } from './services/home-data.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    ProfileSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    HomeRoutingModule
  ],
  providers: [
    HomeDataService
  ],
  exports: [
    // HomeComponent
  ]
})
export class HomeModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkComponent } from './network/network.component';
import { NetworkPageComponent } from './network/network-page/network-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavHomeComponent } from './navbar/nav-home/nav-home.component';
import { NavNetworkComponent } from './navbar/nav-network/nav-network.component';
import { NavJobsComponent } from './navbar/nav-jobs/nav-jobs.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { JobsPageComponent } from './jobs/jobs-page/jobs-page.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent,
    NetworkPageComponent,
    NavbarComponent,
    NavHomeComponent,
    NavNetworkComponent,
    NavJobsComponent,
    HomeComponent,
    JobsComponent,
    HomePageComponent,
    JobsPageComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

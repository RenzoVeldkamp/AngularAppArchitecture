import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkModule } from './network/network.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NetworkModule,
    JobsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

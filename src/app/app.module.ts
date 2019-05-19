import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';

import { AppComponent } from './app.component';
import { NetworkComponent } from './network/network.component';
import { NetworkPageComponent } from './network/network-page/network-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkComponent,
    NetworkPageComponent,
    NavbarComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    JobsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

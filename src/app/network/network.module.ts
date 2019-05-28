import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';

import { NetworkComponent } from './network.component';
import { NetworkPageComponent } from './network-page/network-page.component';
import { NetworkDataService } from './network-data.service';

@NgModule({
  declarations: [
    NetworkComponent,
    NetworkPageComponent
  ],
  imports: [
    CommonModule,
    NetworkRoutingModule
  ],
  providers: [
    NetworkDataService
  ]
})
export class NetworkModule { }

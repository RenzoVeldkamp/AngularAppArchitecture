import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
// import { HomeDataService } from '../home/services/home-data.service';

@NgModule({
  declarations: [
    JobsComponent,
    JobsPageComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]// ,
  // providers: [
  //   HomeDataService
  // ]
})
export class JobsModule {
}

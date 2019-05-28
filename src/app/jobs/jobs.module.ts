import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { JobsDataService } from './jobs-data.service';

@NgModule({
  declarations: [
    JobsComponent,
    JobsPageComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  providers: [
    JobsDataService
  ]
})
export class JobsModule {
}

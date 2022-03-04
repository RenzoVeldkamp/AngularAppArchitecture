import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';
import { NetworkModule } from './network/network.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/network' },
  { path: 'home', loadChildren: () => HomeModule }, // lazy load the Home Module
  { path: 'network', loadChildren: () => NetworkModule  }, // lazy load the Network Module
  { path: 'jobs', loadChildren: () => JobsModule }, // lazy load the Jobs Module
  { path: '**', redirectTo: '/network' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

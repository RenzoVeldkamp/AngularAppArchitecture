import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { NetworkComponent } from './network/network.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsModule } from './jobs/jobs.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/network' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'network', component: NetworkComponent },
  { path: 'jobs', loadChildren: () => JobsModule },
  { path: '**', redirectTo: '/network' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

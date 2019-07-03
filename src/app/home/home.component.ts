import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProfileSummaryData, ProfileSummaryData } from './models/profile-summary-data';
import { HomeDataService } from './services/home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public profiledata: IProfileSummaryData = new ProfileSummaryData();
  public loading: boolean;

  private subscription: Subscription;

  constructor(private homeDataService: HomeDataService) {
  }

  ngOnInit() {
    this.subscription = this.homeDataService.loading$.subscribe(ld => {
      this.loading = ld;
    });

    this.subscription.add(
      this.homeDataService.getData()
        .subscribe(resp => this.handleResponse(resp))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleResponse(resp: IProfileSummaryData): void {
    this.profiledata = resp;
  }
}

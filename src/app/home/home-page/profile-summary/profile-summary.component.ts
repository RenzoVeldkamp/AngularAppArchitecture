import { Component, OnInit } from '@angular/core';

import { ProfileSummaryData, IProfileSummaryData } from '../../models/profile-summary-data';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {
  public data: IProfileSummaryData = new ProfileSummaryData;
  public loading = true;

  private homeService: HomeService;
  constructor(homeService: HomeService) {
    this.homeService = homeService;
  }

  ngOnInit() {
    this.homeService.getData()
      .subscribe(resp => this.handleResponse(resp));
  }

  handleResponse(resp: IProfileSummaryData): void {
    this.data = resp;
    this.loading = false;
  }
}

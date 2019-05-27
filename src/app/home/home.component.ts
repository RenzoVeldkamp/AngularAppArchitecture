import { Component, OnInit } from '@angular/core';

import { IProfileSummaryData, ProfileSummaryData } from './models/profile-summary-data';
import { HomeDataService } from './services/home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public profiledata: IProfileSummaryData = new ProfileSummaryData();

  constructor(private homeDataService: HomeDataService) {  }

  ngOnInit() {
    this.homeDataService.getData()
      .subscribe(resp => this.handleResponse(resp));
  }

  handleResponse(resp: IProfileSummaryData): void {
    this.profiledata = resp;
  }

}

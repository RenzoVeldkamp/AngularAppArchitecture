import { Component, OnInit } from '@angular/core';
import { ProfileSummaryData, IProfileSummaryData } from '../models/profile-summary-data';
import { HomeDataService } from '../services/home-data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public loading = true;
  public profiledata: IProfileSummaryData;

  constructor(private homeDataService: HomeDataService) {
  }

  ngOnInit() {
    this.homeDataService.getData()
      .subscribe(resp => this.handleResponse(resp));
  }

  handleResponse(resp: IProfileSummaryData): void {
    this.profiledata = resp;
    this.loading = false;
  }
}

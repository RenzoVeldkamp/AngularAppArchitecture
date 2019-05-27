import { Component, Input, OnInit } from '@angular/core';

import { IProfileSummaryData } from '../models/profile-summary-data';
import { HomeDataService } from '../services/home-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @Input() data: IProfileSummaryData;

  public loading: boolean;

  constructor(private homeDataService: HomeDataService) {
    this.homeDataService.loading$.subscribe(ld => {
      this.loading = ld;
    });
  }

  ngOnInit() { }
}

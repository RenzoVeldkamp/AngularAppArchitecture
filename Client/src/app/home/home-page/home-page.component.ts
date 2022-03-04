import { Component, Input, OnInit } from '@angular/core';

import { IProfileSummaryData, ProfileSummaryData } from '../models/profile-summary-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Input() data: IProfileSummaryData = new ProfileSummaryData();
  @Input() loading: boolean=false;

  constructor() {
  }

  ngOnInit() {
  }
}

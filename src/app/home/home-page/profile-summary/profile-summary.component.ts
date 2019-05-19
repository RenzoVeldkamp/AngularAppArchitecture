import { Component, Input, OnInit } from '@angular/core';

import { ProfileSummaryData, IProfileSummaryData } from '../../models/profile-summary-data';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {
  @Input() public data: IProfileSummaryData;

  constructor() { }

  ngOnInit() {
  }

/*
The code below actually doesn't belong here...
 */

  /*
  public loading = true;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getData()
      .subscribe(resp => this.handleResponse(resp));
  }

  handleResponse(resp: IProfileSummaryData): void {
    this.data = resp;
    this.loading = false;
  }
  */
}

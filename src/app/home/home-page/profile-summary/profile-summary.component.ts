import { Component, Input, OnInit } from '@angular/core';

import { IProfileSummaryData } from '../../models/profile-summary-data';

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

}

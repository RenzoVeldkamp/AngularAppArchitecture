import { Component, OnInit } from '@angular/core';
// import { HomeDataService } from '../home/services/home-data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor() {
  }
  // constructor(private homeDataService: HomeDataService) { }

  ngOnInit() {
    //   this.homeDataService.getData()
    //     .subscribe(resp => alert('received response'));
  }

}

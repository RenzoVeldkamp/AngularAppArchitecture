import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProfileSummaryData, ProfileSummaryData } from '../models/profile-summary-data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // private apiSvcUrl = 'http://localhost:5000/api/Home';
  private apiSvcUrl = 'https://localhost:5001/api/Home';
  private httpService: Http;

  constructor(httpService: Http) {
    this.httpService = httpService;
  }

  public getData(): Observable<IProfileSummaryData> {
    const options: RequestOptions = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('content-type', 'application/json');

    return this.httpService.get(this.apiSvcUrl, options)
      .pipe(data => this.parseProfileSummaryData(data));
  }

  private parseProfileSummaryData(data: Observable<Response>): Observable<IProfileSummaryData> {
    return data.pipe(
      map(item => item.json()),
      map((item: IProfileSummaryData) => {
        const profileSummaryData = new ProfileSummaryData();
        profileSummaryData.user = item.user;
        profileSummaryData.isAuthenticated = item.isAuthenticated;
        profileSummaryData.avatarUrl = item.avatarUrl;
        profileSummaryData.employer = item.employer;
        profileSummaryData.jobTitle = item.jobTitle;

        return profileSummaryData;
      })
    );
  }
}

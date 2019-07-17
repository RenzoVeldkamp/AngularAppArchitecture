import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { IProfileSummaryData, ProfileSummaryData } from '../models/profile-summary-data';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  public loading$: Observable<boolean>;

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private apiSvcUrl = 'https://localhost:5001/api/Home';
  private httpService: Http;

  constructor(httpService: Http) {
    this.httpService = httpService;
    this.loading$ = this.loadingSubject.asObservable();
  }

  public getData(): Observable<IProfileSummaryData> {
    const options: RequestOptions = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('content-type', 'application/json');

    this.loadingSubject.next(true);

    return this.httpService.get(this.apiSvcUrl, options)
      .pipe((data: Observable<Response>) => this.parseProfileSummaryData(data));
  }

  private parseProfileSummaryData(data: Observable<Response>): Observable<IProfileSummaryData> {
    return data.pipe(
      map(item => item.json()),
      delay(2000),
      map((item: IProfileSummaryData) => {
        this.loadingSubject.next(false);

        return item;
      })
    );
  }
}

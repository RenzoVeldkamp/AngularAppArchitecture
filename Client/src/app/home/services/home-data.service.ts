import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { IProfileSummaryData, ProfileSummaryData } from '../models/profile-summary-data';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  public loading$: Observable<boolean>;

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private apiSvcUrl = 'https://localhost:5001/api/Home';
  private httpService: HttpClient;

  constructor(httpService: HttpClient) {
    this.httpService = httpService;
    this.loading$ = this.loadingSubject.asObservable();
  }

  public getData(): Observable<IProfileSummaryData> {
    const options = { headers : new HttpHeaders() };
    options.headers.append('content-type', 'application/json');

    this.loadingSubject.next(true);

    return this.httpService.get<IProfileSummaryData>(this.apiSvcUrl, options)
      .pipe((data: Observable<IProfileSummaryData>) => this.parseProfileSummaryData(data));
  }

  private parseProfileSummaryData(data: Observable<IProfileSummaryData>): Observable<IProfileSummaryData> {
    return data.pipe(
      delay(2000),
      map((item: IProfileSummaryData) => {
        this.loadingSubject.next(false);
        return item;
      })
    );
  }
}

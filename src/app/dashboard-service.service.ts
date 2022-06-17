import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private httpClient:HttpClient) { }
  getBenchData():Observable<any> {
    return this.httpClient.get<any[]>('./assets/bench.json');
  }
  getAlertData():Observable<any> {
    return this.httpClient.get<any[]>('./assets/alert.json');
  }
}
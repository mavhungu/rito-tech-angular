import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calls } from '../interfaces/calls';
import { TotalCost } from '../interfaces/total-cost';
import { YearMonth } from '../interfaces/year-month';
import { ExtensionSummary } from '../interfaces/extension-summart';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCalls(): Observable<Calls[]> {
    return this.http.get<Calls[]>('http://localhost:3333/api/bvs-calls');
  }

  getAllCallsByYear() {
    return this.http.get<TotalCost[]>('http://localhost:3333/api/bvs-calls/call-by-year');
  }

  getAllCallsPerMonth(id: string): Observable<YearMonth[]> {
    return this.http.get<YearMonth[]>(`http://localhost:3333/api/bvs-calls/call-per-month/${id}`);
  }

  getExtensionRecords(extension: any): Observable<ExtensionSummary[]> {
    console.log(extension)
    return this.http.get<ExtensionSummary[]>(`http://localhost:3333/api/bvs-calls/extension-records/${extension}`);
  }

  getExtensionMonthSummary(extension: any): Observable<ExtensionSummary[]> {
    console.log(extension);
    return this.http.post<ExtensionSummary[]>('http://localhost:3333/api/bvs-calls/extension-calls',JSON.stringify(extension), httpOptions,);
  }
}

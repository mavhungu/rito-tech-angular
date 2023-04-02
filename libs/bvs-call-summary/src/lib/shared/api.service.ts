import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calls } from '../interfaces/calls';
import { TotalCost } from '../interfaces/total-cost';
import { YearMonth } from '../interfaces/year-month';

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

  getAllCallsPerMonth(id: any): Observable<YearMonth[]> {
    return this.http.get<YearMonth[]>(`http://localhost:3333/api/bvs-calls/call-per-month/${id}`);
  }
}

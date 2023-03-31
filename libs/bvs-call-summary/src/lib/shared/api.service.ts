import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calls } from '../interfaces/calls';
import { TotalCost } from '../interfaces/total-cost'

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
    return this.http.get<TotalCost[]>('http://localhost:3333/api/bvs-calls/ronewa');
  }
}

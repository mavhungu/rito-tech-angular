import { Component, OnInit } from '@angular/core';
import { ApiService, Calls, TotalCost } from '@bvs-call-summary';

@Component({
  selector: 'fse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  callsData: Calls[] = [];
  totalCost: TotalCost[] = [];
  users: TotalCost[] = [];
  page = 1;
  count = 0;
  pageSize = 20;

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.getAllCallRecords();//.subscribe(data => this.callsData = data );
    this.getAllCallsByYear();//.subscribe( users => this.users = users );
  }

  getAllCallRecords() {
    this.api.getAllCalls().subscribe(data => this.callsData = data );
  };

  getAllCallsByYear() {
    this.api.getAllCallsByYear().subscribe(data => this.totalCost = data);
  }

}

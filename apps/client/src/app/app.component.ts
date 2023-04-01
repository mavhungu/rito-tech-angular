import { Component, OnInit } from '@angular/core';
import { ApiService, Calls } from '@bvs-call-summary';

@Component({
  selector: 'fse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  callsData: Calls[] = [];
  page = 1;
  count = 0;
  pageSize = 20;

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.getAllCallRecords();
  }

  getAllCallRecords() {
    this.api.getAllCalls().subscribe(data => this.callsData = data );
  };

}

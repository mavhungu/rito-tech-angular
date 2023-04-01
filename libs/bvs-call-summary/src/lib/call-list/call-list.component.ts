import { Component, OnInit } from '@angular/core';
import { TotalCost } from '../interfaces/total-cost';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'shopping-app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css'],
})
export class CallListComponent implements OnInit {

  totalCost: TotalCost[] = [];

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.getAllCallsByYear();
  }

  getAllCallsByYear() {
    this.api.getAllCallsByYear().subscribe(data => this.totalCost = data);
  }
}

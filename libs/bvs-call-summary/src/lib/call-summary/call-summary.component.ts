import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@bvs-call-summary';

@Component({
  selector: 'shopping-app-call-summary',
  templateUrl: './call-summary.component.html',
  styleUrls: ['./call-summary.component.css'],
})
export class CallSummaryComponent implements OnInit {

  monthCalls: [] = [];

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.getCallsPerMonth(this.id);
  }

  getCallsPerMonth(id: any) {
    this.api.getAllCallsPerMonth(id).subscribe((data)=> console.log(data));
  }
}

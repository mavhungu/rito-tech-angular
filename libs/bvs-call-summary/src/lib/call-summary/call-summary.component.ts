import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { YearMonth } from '../interfaces/year-month';
import { ApiService } from '@bvs-call-summary';

@Component({
  selector: 'shopping-app-call-summary',
  templateUrl: './call-summary.component.html',
  styleUrls: ['./call-summary.component.css'],
})
export class CallSummaryComponent implements OnInit {

  yearMonth = '';
  id = '';
  monthCalls: YearMonth[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.yearMonth = params['id'];
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getCallsPerMonth(this.id);
  }

  getCallsPerMonth(id: any) {
    console.log("YEARMONTH is :"+ this.yearMonth);
    this.api.getAllCallsPerMonth(id).subscribe( data => this.monthCalls = data );
  }
}

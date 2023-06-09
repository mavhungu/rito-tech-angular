import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '@bvs-call-summary';
import { ExtensionSummary } from '../interfaces/extension-summart';

@Component({
  selector: 'shopping-app-extension-summary',
  templateUrl: './extension-summary.component.html',
  styleUrls: ['./extension-summary.component.css'],
})
export class ExtensionSummaryComponent implements OnInit {

  extension: any;
  extensionSummary: ExtensionSummary[] = [];
  pageSize=10;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
  ) {}

  ngOnInit(): void {

    this.route.queryParamMap.subscribe((params) => {
      this.extension = { ...params.keys, ...params };
      this.getExtensionMonthSummary(this.extension);
    });
  }

  getExtensionMonthSummary(extension: any) {
    const { id, date } = extension.params;
    this.api.getExtensionMonthSummary(extension.params).subscribe(data => this.extensionSummary = data );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
//import 'rxjs/add/operator/filter';
import { ApiService } from '@bvs-call-summary';

@Component({
  selector: 'shopping-app-extension-summary',
  templateUrl: './extension-summary.component.html',
  styleUrls: ['./extension-summary.component.css'],
})
export class ExtensionSummaryComponent implements OnInit {

  qqueryParams: any;
  extension = '';
  /*id:string;
  date:string;*/

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.extension = this.route.snapshot.paramMap.get('id')!;
    this.getExtensionMonthSummary(this.extension);
    
    this.route.queryParamMap.subscribe((params) => {
      this.qqueryParams = { ...params.keys, ...params };
      this.getme(this.qqueryParams);
    });
  }

  getExtensionMonthSummary(extension: string) {
    console.log(" ID IS "+ extension);
    console.log(this.qqueryParams);
    //this.api.getExtensionMonthSummary(extension).subscribe((data)=>{ console.log(data)});
  }

  getme(data: any){
    const {id, date} = data.params;
    console.log("id is -: "+ id);
  }

}

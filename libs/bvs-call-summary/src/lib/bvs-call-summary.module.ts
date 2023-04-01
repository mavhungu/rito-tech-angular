import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CallSummaryComponent } from './call-summary/call-summary.component';
import { CallListComponent } from './call-list/call-list.component';
import { ExtensionSummaryComponent } from './extension-summary/extension-summary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  declarations: [
    CallSummaryComponent,
    CallListComponent,
    ExtensionSummaryComponent,
    PageNotFoundComponent,
  ],
  exports: [CallSummaryComponent, CallListComponent, ExtensionSummaryComponent, PageNotFoundComponent,],
})
export class BvsCallSummaryModule {}

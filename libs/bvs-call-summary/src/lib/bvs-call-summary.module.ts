import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallSummaryComponent } from './call-summary/call-summary.component';
import { CallListComponent } from './call-list/call-list.component';
import { ExtensionSummaryComponent } from './extension-summary/extension-summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CallSummaryComponent,
    CallListComponent,
    ExtensionSummaryComponent,
  ],
  exports: [CallSummaryComponent, CallListComponent],
})
export class BvsCallSummaryModule {}

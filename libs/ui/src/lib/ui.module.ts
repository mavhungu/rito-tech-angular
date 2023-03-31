import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CallSummaryComponent } from './components/call-summary/call-summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, CallSummaryComponent],
})
export class UiModule {}

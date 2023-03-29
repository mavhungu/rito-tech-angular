import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, TitleStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { NgxPaginationModule } from 'ngx-pagination';


import { appRoutes } from './app.routes';
import { BvsCallSummaryModule, TitleStrategyService } from '@bvs-call-summary';
import { UiModule } from '@shopping-app/ui';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ClarityModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    UiModule,
    BvsCallSummaryModule
  ],
  providers: [
    { provide: TitleStrategy, useClass: TitleStrategyService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Route } from '@angular/router';
import { CallListComponent, CallSummaryComponent, PageNotFoundComponent } from '@bvs-call-summary';


export const appRoutes: Route[] = [
  { path: '', component: CallListComponent},
  { path: 'summary/:id', component: CallSummaryComponent },
  { path: "**", component: PageNotFoundComponent }
];

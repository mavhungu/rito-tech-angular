import { Route } from '@angular/router';
import { CallListComponent, CallSummaryComponent,ExtensionSummaryComponent, PageNotFoundComponent } from '@bvs-call-summary';


export const appRoutes: Route[] = [
  { path: '', component: CallListComponent},
  { path: 'summary/:id', component: CallSummaryComponent },
  { path: 'extension-summary/:id', component: ExtensionSummaryComponent },
  { path: "**", component: PageNotFoundComponent }

];

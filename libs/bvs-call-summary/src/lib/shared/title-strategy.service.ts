import { Injectable } from '@angular/core';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleStrategyService extends TitleStrategy {

  updateTitle(snapshot: RouterStateSnapshot): void {
    const detailsOutlet = snapshot.root.children.find(r => r.outlet === 'details');
    let title = this.buildTitle(snapshot);
    if(detailsOutlet) {
      title = `${title} --> ${detailsOutlet.routeConfig?.title}`
    }
    if(title) {
      this.title.setTitle(`App - ${title}`);
    }
  }

  constructor(
    private title: Title
  ) { super() }
}

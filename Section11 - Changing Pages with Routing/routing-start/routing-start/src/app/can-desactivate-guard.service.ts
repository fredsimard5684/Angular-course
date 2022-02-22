import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanDesactivateGuardService implements CanDeactivate<CanComponentDesactivate> {

  constructor() { }

  canDeactivate(component: CanComponentDesactivate, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDesactivate();
  }
}

export interface CanComponentDesactivate {
  canDesactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

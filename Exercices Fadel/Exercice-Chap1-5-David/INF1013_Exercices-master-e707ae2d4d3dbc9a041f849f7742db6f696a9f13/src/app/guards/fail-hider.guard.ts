import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentDataService } from "../service/student-data.service";

@Injectable({
  providedIn: 'root'
})
export class FailHiderGuard implements CanActivate {
  constructor( private service: StudentDataService,
               private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const idx = Number(next.paramMap.get('idx'));
    const student = this.service.students[idx];
    let avg = 0.0;
    student.scores.forEach(s => {
      avg = avg + s.value;
    });
    avg = avg / (student.scores.length);
    if (avg < 60 ) {
      return  this.router.navigate(['']);
    }
    return true;
  }
}

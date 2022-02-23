import { Component } from '@angular/core';
import {
  combineLatest,
  concat,
  forkJoin,
  fromEvent,
  interval,
  merge,
  of,
  pipe,
  range,
  timer,
} from 'rxjs';
import { filter, map, mergeAll, mergeMap, take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ObservblesOperateurs-InputOutput';

  ngOnInit() {
    //Operateur map
    // const nums$ = of(1, 2, 3);
    // const mapToSquare = map((v: number) => v * v);
    // const squaredNums$ = mapToSquare(nums$);
    // squaredNums$.subscribe((v) => console.log(v));
    //Operateur filter
    // const nums$ = of(1, 2, 3, 4, 5);
    // const filterOddVals = filter((n: number) => n % 2 !== 0);
    // const squareOdd$ = filterOddVals(nums$);
    // squareOdd$.forEach((v) => console.log(v));
    //Operateur merge
    // const timer1 = interval(1000).pipe(take(10));
    // const timer2 = interval(2000).pipe(take(6));
    // const timer3 = interval(500).pipe(take(10));
    // const concurrent = 2;
    // const merged = merge(timer1, timer2, timer3, concurrent);
    // merged.subscribe((x) => console.log(x));
    //Operateur pipe
    // const nums$ = of(1, 2, 3, 4, 5);
    // const squareOddVals = pipe(
    //   filter((n: number) => n % 2 !== 0),
    //   map((n: number) => n * n)
    // );
    // const squareOdd$ = squareOddVals(nums$);
    // squareOdd$.forEach((v) => console.log(v));
    //Operateur mergeAll
    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map((event) => interval(1000).pipe(take(10)))
    // );
    // const merger = mergeAll(3);
    // const firstOrder = merger(higherOrder);
    // firstOrder.subscribe((x) => console.log(x));
    //Operateur mergeMap
    // const letters$ = of('a', 'b', 'c');
    // const secondes$ = interval(1000);
    // const merger$ = mergeMap((x: string) => secondes$.pipe(map((i) => x + i)));
    // const result$ = merger$(letters$);
    // result$.subscribe((r) => console.log(r));
    //Operateur combineLast
    // const timer1 = timer(0, 1000);
    // const timer2 = timer(0, 1000);
    // const combinedTimers = combineLatest([timer1, timer2]);
    // combinedTimers.subscribe((v) => console.log(v));
    //Operateur concat
    // const timer = interval(1000).pipe(take(4));
    // const sequence = range(1, 10);
    // const result = concat(timer, sequence);
    // result.subscribe((v) => console.log(v));
    //Operateur forkJoin
    // const numbers = of(1, 2, 3, 4, 5);
    // const letters = of('a', 'b', 'c');
    // const seconds = interval(1000).pipe(take(3));
    // const result = forkJoin([numbers, letters, seconds]);
    // result.subscribe((x) => console.log(x));
  }
}

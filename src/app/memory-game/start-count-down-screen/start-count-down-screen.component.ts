import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {first, map, skipWhile, switchMap, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-count-down-screen',
  templateUrl: './start-count-down-screen.component.html',
  styleUrls: ['./start-count-down-screen.component.scss']
})
export class StartCountDownScreenComponent implements OnInit, OnDestroy {
  timeLeft = 3;

  private destroyed$ = new Subject<void>();

  constructor(private router: Router) {
  }

  ngOnInit() {
    const oneSecond = 1000;
    const start = 3;
    const countDown$ = interval(oneSecond).pipe(
      map(x => start - x - 1),
    );
    countDown$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((x) => {
      this.timeLeft = x;
    });
    countDown$.pipe(
      skipWhile((x) => x >= 0),
      first(),
      switchMap(() => this.router.navigateByUrl('/remember-random-images-screen')),
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      // do nothing
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


}

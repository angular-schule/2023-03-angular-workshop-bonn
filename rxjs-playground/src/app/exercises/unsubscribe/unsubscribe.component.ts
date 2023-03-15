import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, map, tap } from 'rxjs';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent  {
  interval$ = timer(0, 1000).pipe(
    map(x => x * 100),
    tap(x => console.log(x))
  );
}

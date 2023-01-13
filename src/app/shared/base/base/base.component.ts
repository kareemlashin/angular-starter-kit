import { Injectable, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class BaseComponent implements OnDestroy {
   _filters$ = new Subject();

  ngOnDestroy() {
    console.log('Service destroy')
  }
}

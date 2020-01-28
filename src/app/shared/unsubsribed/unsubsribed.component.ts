import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubsribed',
  templateUrl: './unsubsribed.component.html',
  styleUrls: ['./unsubsribed.component.scss']
})
export class UnsubsribedComponent implements OnDestroy {

  subscription = new Subscription();

  constructor() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

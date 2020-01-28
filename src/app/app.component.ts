import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SuppliersState } from './store/reducer';
import { rootStore } from './store';
import { MatDialog } from '@angular/material/dialog';
import { UnsubsribedComponent } from './shared/unsubsribed/unsubsribed.component';
import { switchMap, tap, mergeMap } from 'rxjs/operators';
import { AcceptModalComponent, ErrorMessage } from './shared/accept-modal/accept-modal.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UnsubsribedComponent implements OnInit {

  constructor(private store: Store<{ SuppliersState: SuppliersState }>, private modal: MatDialog) {
    super();
  }

  ngOnInit() {
    this.store.dispatch(rootStore.ApiGetSuppliers()());
    this.errorHundler();
  }

  errorHundler() {
   this.subscription.add(this.store.select(rootStore.getError()).pipe(mergeMap((e: Error) => {
      if (e === null) { return of(null); } else {
      const errorModal = this.modal.open(AcceptModalComponent, {
        data: { error: e, title: 'error' }
      });
      return errorModal.afterClosed();
      }
    })).subscribe((res) => {
      if (res !== null) {
        this.store.dispatch(rootStore.ApiErrorClear()());
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

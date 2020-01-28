import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SuppliersState } from './store/reducer';
import { rootStore } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'manage-suppliers';

  constructor(private store: Store<{ SuppliersState: SuppliersState }>) {}

  ngOnInit() {
    let action = rootStore.ApiGetSuppliers();
    this.store.dispatch(action());
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../models/models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Store, select } from '@ngrx/store';
import { rootStore } from '../store';
import { SuppliersState } from '../store/reducer';
import { UnsubsribedComponent } from '../shared/unsubsribed/unsubsribed.component';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent extends UnsubsribedComponent implements OnInit {
  displayedColumns = ['ggn', 'name', 'country', 'roles', 'sector', 'button'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  suppliers: Supplier[] = [];
  loading;
  dataSource: MatTableDataSource<Supplier>;

  constructor(private store: Store<{ SuppliersState: SuppliersState }>) {
    super();
  }

  ngOnInit() {
    this.subscription.add(this.store.pipe(select(rootStore.getLloading())).subscribe((loading: boolean) => {
      this.loading = loading;
    }));
    this.subscription.add(this.store.pipe(select(rootStore.getSuppliers())).subscribe((suppliers: Supplier[]) => {
      if (suppliers) {
        this.suppliers = suppliers;
        this.dataSource = new MatTableDataSource(this.suppliers);
        this.dataSource.paginator = this.paginator;
      }
    }));
  }

  editSupplier(suplliers: Supplier) {}

  deleteSupplier(supplier: Supplier) {}
  
}

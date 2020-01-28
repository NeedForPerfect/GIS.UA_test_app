import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../models/models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Store, select } from '@ngrx/store';
import { rootStore } from '../store';
import { SuppliersState } from '../store/reducer';
import { UnsubsribedComponent } from '../shared/unsubsribed/unsubsribed.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AcceptModalComponent } from '../shared/accept-modal/accept-modal.component';

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

  constructor(private store: Store<{ SuppliersState: SuppliersState }>, private router: Router, private modal: MatDialog) {
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

  editSupplier(supllier: Supplier) {
    this.router.navigate(['edit-supplier', supllier._id]);
  }

  deleteSupplierSuccess(supplier: Supplier) {
    const acceptModal = this.modal.open(AcceptModalComponent, { data: {
      title: 'Are you sure want to delete ' + supplier.name
    } });
    const modalSubscription = acceptModal.afterClosed().subscribe((res) => {
      if (res) { this.deleteSupplier(supplier) };
      modalSubscription.unsubscribe();
    });
  }

  deleteSupplier(supplier: Supplier) {
    this.store.dispatch(rootStore.ApiDeleteSupplier()({id: supplier._id}));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}

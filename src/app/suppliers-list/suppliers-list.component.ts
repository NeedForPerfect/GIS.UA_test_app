import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../models/models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SuppliersService } from '../services/suppliers.service';
import { Store, select } from '@ngrx/store';
import { rootStore } from '../store';
import { SuppliersState } from '../store/reducer';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit {
  displayedColumns = ['ggn', 'name', 'country', 'roles', 'sector', 'button'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  suppliers: Supplier[] = [];

  dataSource: MatTableDataSource<Supplier>;

  constructor(private store: Store<{ SuppliersState: SuppliersState }>) {}

  ngOnInit() {
    this.store.select(rootStore.getLloading).subscribe((loading: boolean) => {});
    this.store.pipe(select(rootStore.getSuppliers)).subscribe(rt => {
      if (rt) {
        this.suppliers = rt;
        this.dataSource = new MatTableDataSource(this.suppliers);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  
}

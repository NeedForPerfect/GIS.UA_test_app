import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../models/models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SuppliersService } from '../services/suppliers.service';
import { SuppliersState } from '../store/reducer';
import { Store, select } from '@ngrx/store';
import { ApiGetSuppliers } from '../store/actions';
import { suppliersCount } from '../store/selectors';

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

  $count;

  constructor(
    private suppliersService: SuppliersService,
    private store: Store<SuppliersState>
    ) {}

  ngOnInit() {
    this.suppliersService.getSuppliers().subscribe((res: Supplier[]) => {
      this.suppliers = res;
      this.dataSource = new MatTableDataSource(this.suppliers);
      this.dataSource.paginator = this.paginator;
    });

    // this.store.pipe(select(suppliersCount())).subscribe((second) => {
    //   console.log('Second Variant', second);
    // })

    //this.$count = this.store.pipe(select(suppliersCount));

    this.store.subscribe((store) => {
      console.log('Store', store);
    });

  }


  subscripeState() {
    this.$count = this.store.select(suppliersCount, null);
  }

  getSuppliers() {
    this.store.dispatch(ApiGetSuppliers());
  }

}

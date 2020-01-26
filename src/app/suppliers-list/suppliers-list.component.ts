import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from '../models/models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit {

  displayedColumns = ['ggn', 'name', 'country', 'roles', 'sector'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  suppliers: Supplier[] = [
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'Agricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'asomeText' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'BAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'bSomething' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'CAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'cStrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'DAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'dStrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'EAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'eStrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'FAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'fStrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'GAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'gStrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'HAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'ebtrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'IAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'eatrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'JAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'yjStrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'KAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'zkStrawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'LAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'Strawberries' },
    {id: '644664668-4646864-dawd', ggn: '5768495061445', name: 'MAgricola Selecta Berries', country: 'Spain', roles: 'Primary producer', sector: 'Strawberries' }
  ];

  dataSource = new MatTableDataSource(this.suppliers);

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }


}
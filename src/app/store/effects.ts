import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { SuppliersService } from '../services/suppliers.service';
import { ApiGetSuppliersSuccess, ApiError, ApiGetSuppliers, ApiAddSupplier, ApiAddSupplierSuccess, ApiGetSupplierDetail, ApiGetSupplierDetailSuccess, ApiEditSupplier, ApiEditSupplierSuccess, ApiDeleteSupplier, ApiDeleteSupplierSuccess } from './actions';
import { Store } from '@ngrx/store';
import { SuppliersState } from './reducer';

 
@Injectable()
export class SuppliersEffects {
 
  loadSuppliers$ = createEffect(() => this.actions$.pipe(
    ofType(ApiGetSuppliers()),
    mergeMap(() => {
      return this.suppliersService.getSuppliers()
      .pipe(
        map(suppliers => ApiGetSuppliersSuccess()({suppliers})),
        catchError(() => of(ApiError()()))
      )
    })
    )
  );

  addSupplier$ = createEffect(() => this.actions$.pipe(
    ofType(ApiAddSupplier()),
    mergeMap((action) => this.suppliersService.addSupplier(action.supplier)
      .pipe(
        map(supplier => {
          return ApiAddSupplierSuccess()({supplier});
        }),
        catchError(() => of(ApiError()()))
      )),
      tap((res) => { this.store.dispatch(ApiGetSuppliers()()) })
    )
  );

  getSupplierDetail$ = createEffect(() => this.actions$.pipe(
    ofType(ApiGetSupplierDetail()),
    mergeMap((action) => this.suppliersService.getSupplierById(action.id)
      .pipe(
        map(supplier => {
          return ApiGetSupplierDetailSuccess()({supplier});
        }),
        catchError(() => of(ApiError()()))
      ))
    )
  );

  editSupplier$ = createEffect(() => this.actions$.pipe(
    ofType(ApiEditSupplier()),
    mergeMap((action) => this.suppliersService.editSupplier(action.id, action.supplier)
      .pipe(
        map(supplier => {
          return ApiEditSupplierSuccess()({supplier});
        }),
        catchError(() => of(ApiError()()))
      )),
      tap((res) => { this.store.dispatch(ApiGetSuppliers()()) })
    )
  );

  deleteSupplier$ = createEffect(() => this.actions$.pipe(
    ofType(ApiDeleteSupplier()),
    mergeMap((action) => this.suppliersService.deleteSupplier(action.id)
      .pipe(
        map(supplier => {
          return ApiDeleteSupplierSuccess()({id: supplier._id});
        }),
        catchError(() => of(ApiError()()))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private suppliersService: SuppliersService,
    private store: Store<{SuppliersState: SuppliersState}>
  ) {}
}
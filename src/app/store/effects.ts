import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { SuppliersService } from '../services/suppliers.service';
import { ApiGetSuppliersSuccess, ApiError, ApiGetSuppliers, ApiAddSupplier, ApiAddSupplierSuccess } from './actions';
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
        catchError(() => of(ApiError()))
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
        catchError(() => of(ApiError))
      )),
      tap((res) => { this.store.dispatch(ApiGetSuppliers()()) })
    )
  );
 
  constructor(
    private actions$: Actions,
    private suppliersService: SuppliersService,
    private store: Store<{SuppliersState: SuppliersState}>
  ) {}
}
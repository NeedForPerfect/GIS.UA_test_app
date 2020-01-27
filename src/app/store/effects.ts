import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SuppliersService } from '../services/suppliers.service';
import { ApiGetSuppliersSuccess, ApiError, ApiGetSuppliers } from './actions';

 
@Injectable()
export class SuppliersEffects {
 
  loadSuppliers$ = createEffect(() => this.actions$.pipe(
    ofType(ApiGetSuppliers),
    mergeMap(() => this.suppliersService.getSuppliers()
      .pipe(
        map(suppliers => ApiGetSuppliersSuccess({suppliers})),
        catchError(() => of(ApiError))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private suppliersService: SuppliersService
  ) {}
}
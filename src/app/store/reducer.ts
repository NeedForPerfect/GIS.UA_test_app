import { createReducer, on, Action } from '@ngrx/store';
import {
  ApiGetSuppliers,
  ApiGetSuppliersSuccess,
  ApiGetSupplierDetail,
  ApiGetSupplierDetailSuccess,
  ApiAddSupplier,
  ApiAddSupplierSuccess,
  ApiEditSupplier,
  ApiEditSupplierSuccess,
  ApiDeleteSupplier,
  ApiDeleteSupplierSuccess,
  ApiError
} from './actions';
import { Supplier } from '../models/models';

export interface SuppliersState {
  error?: any;
  suppliers?: Supplier[];
  loading?: boolean
}

const initialState: SuppliersState = {
  error: null,
  suppliers: null,
  loading: false
};

export const suppliersReducer = createReducer(
  initialState,
  on(ApiGetSuppliers, (state, action) => ({ loading: true })),
  on(ApiGetSuppliersSuccess, (state, action) => ({ suppliers: action.suppliers, loading: false })),
  on(ApiError, (state, action) => ({ loading: false, error: action.error })),
);

export function SpReducer(state: SuppliersState | undefined, action: Action) {
    return suppliersReducer(state, action);
  }
import { createReducer, on, Action } from '@ngrx/store';
import {
  ApiGetSuppliers,
  ApiGetSuppliersSuccess,
  ApiAddSupplier,
  ApiError,
  ApiAddSupplierSuccess
} from './actions';
import { Supplier } from '../models/models';

export interface SuppliersState {
  error?: any;
  suppliers?: Supplier[];
  selectedSupplier?: Supplier;
  loading?: boolean
}

const initialState: SuppliersState = {
  error: null,
  suppliers: null,
  loading: false,
  selectedSupplier: null
};

export const suppliersReducer = createReducer(
  initialState,
  on(ApiGetSuppliers, (state, action) => ({ ...state, loading: true })),
  on(ApiGetSuppliersSuccess, (state, action) => ({ ...state, suppliers: action.suppliers, loading: false })),
  on(ApiAddSupplier, (state, action) => ({ ...state, loading: true })),
  on(ApiAddSupplierSuccess, (state, action) => {
    return { ...state, loading: false, selectedSupplier: action.supplier };
  }), // тепер get Supplier у нього нада зробити success
  on(ApiError, (state, action) => ({ ...state, loading: false, error: action.error })),
);

export function SpReducer(state: SuppliersState | undefined, action: Action) {
    return suppliersReducer(state, action);
  }
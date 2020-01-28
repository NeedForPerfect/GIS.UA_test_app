import { createReducer, on, Action } from '@ngrx/store';
import {
  ApiGetSuppliers,
  ApiGetSuppliersSuccess,
  ApiAddSupplier,
  ApiError,
  ApiAddSupplierSuccess,
  StoreClrearSelectedSupplier,
  ApiGetSupplierDetail,
  ApiGetSupplierDetailSuccess,
  ApiEditSupplier,
  ApiEditSupplierSuccess,
  ApiDeleteSupplier,
  ApiDeleteSupplierSuccess,
  ApiErrorClear
} from './actions';
import { Supplier } from '../models/models';

export interface SuppliersState {
  error?: any;
  suppliers?: Supplier[];
  selectedSupplier?: Supplier;
  loading?: boolean;
}

const initialState: SuppliersState = {
  error: null,
  suppliers: null,
  loading: false,
  selectedSupplier: null
};

export const suppliersReducer = createReducer(
  initialState,
  on(ApiGetSuppliers(), (state, action) => ({ ...state, loading: true })),
  on(ApiGetSuppliersSuccess(), (state, action) => ({ ...state, suppliers: action.suppliers, loading: false })),

  on(ApiAddSupplier(), (state, action) => ({ ...state, loading: true })),
  on(ApiAddSupplierSuccess(), (state, action) => {
    return { ...state, loading: false, selectedSupplier: action.supplier };
  }),

  on(ApiGetSupplierDetail(), (state, action) => {
    return { ...state, loading: true };
  }),
  on(ApiGetSupplierDetailSuccess(), (state, action) => {
    return { ...state, loading: false, selectedSupplier: action.supplier };
  }),

  on(ApiEditSupplier(), (state, action) => {
    return { ...state, loading: true };
  }),
  on(ApiEditSupplierSuccess(), (state, action) => {
    return { ...state, loading: false, selectedSupplier: action.supplier };
  }),

  on(ApiDeleteSupplier(), (state, action) => {
    return { ...state, loading: true };
  }),
  on(ApiDeleteSupplierSuccess(), (state: SuppliersState, action) => {
    const withoutDeleted = state.suppliers.filter((s: Supplier) => {
      return s._id !== action.id;
    });
    return { ...state, loading: false, suppliers: withoutDeleted };
  }),

  on(StoreClrearSelectedSupplier(), (state, action) => ({ ...state, selectedSupplier: null })),
  on(ApiError(), (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),
  on(ApiErrorClear(), (state, action) => {
    return { ...state, loading: false, error: null };
  })
);

export function SpReducer(state: SuppliersState | undefined, action: Action) {
  return suppliersReducer(state, action);
}

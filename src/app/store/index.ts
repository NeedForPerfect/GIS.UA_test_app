import {
    ApiGetSuppliers,
    ApiGetSuppliersSuccess,
    ApiGetSupplierDetail,
    ApiAddSupplier,
    ApiEditSupplier,
    ApiDeleteSupplier,
    ApiError
  } from './actions';
  import { SuppliersEffects } from './effects';
import { SpReducer } from './reducer';
import { getSuppliers, getLloading, getSupplier } from './selectors';

export const rootStore = {
    ApiGetSuppliers,
    ApiGetSuppliersSuccess,
    ApiGetSupplierDetail,
    ApiAddSupplier,
    ApiEditSupplier,
    ApiDeleteSupplier,
    ApiError,
    SuppliersEffects,
    SpReducer,
    getSuppliers,
    getLloading,
    getSupplier
};
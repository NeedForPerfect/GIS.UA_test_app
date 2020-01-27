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
  import { SuppliersEffects } from './effects';
import { SpReducer } from './reducer';
import { getSuppliers, getLloading, selectCombined } from './selectors';

export const rootStore = {
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
    ApiError,
    SuppliersEffects,
    SpReducer,
    getSuppliers,
    getLloading,
    selectCombined
};
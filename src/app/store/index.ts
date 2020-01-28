import {
    ApiGetSuppliers,
    ApiGetSuppliersSuccess,
    ApiGetSupplierDetail,
    ApiGetSupplierDetailSuccess,
    ApiAddSupplier,
    ApiEditSupplier,
    ApiEditSupplierSuccess,
    ApiDeleteSupplier,
    ApiDeleteSupplierSuccess,
    ApiError,
    StoreClrearSelectedSupplier,
    ApiErrorClear
  } from './actions';
  import { SuppliersEffects } from './effects';
import { SpReducer } from './reducer';
import { getSuppliers, getLloading, getSupplier, getError } from './selectors';

export const rootStore = {
    ApiGetSuppliers,
    ApiGetSuppliersSuccess,
    ApiGetSupplierDetail,
    ApiGetSupplierDetailSuccess,
    ApiAddSupplier,
    ApiEditSupplier,
    ApiEditSupplierSuccess,
    ApiDeleteSupplier,
    ApiDeleteSupplierSuccess,
    ApiError,
    SuppliersEffects,
    SpReducer,
    getSuppliers,
    getLloading,
    getSupplier,
    getError,
    StoreClrearSelectedSupplier,
    ApiErrorClear
};
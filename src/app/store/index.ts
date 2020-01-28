import {
    ApiGetSuppliers,
    ApiGetSuppliersSuccess,
    ApiGetSupplierDetail,
    ApiGetSupplierDetailSuccess,
    ApiAddSupplier,
    ApiEditSupplier,
    ApiDeleteSupplier,
    ApiError,
    StoreClrearSelectedSupplier
  } from './actions';
  import { SuppliersEffects } from './effects';
import { SpReducer } from './reducer';
import { getSuppliers, getLloading, getSupplier } from './selectors';

export const rootStore = {
    ApiGetSuppliers,
    ApiGetSuppliersSuccess,
    ApiGetSupplierDetail,
    ApiGetSupplierDetailSuccess,
    ApiAddSupplier,
    ApiEditSupplier,
    ApiDeleteSupplier,
    ApiError,
    SuppliersEffects,
    SpReducer,
    getSuppliers,
    getLloading,
    getSupplier,
    StoreClrearSelectedSupplier
};
import { createAction, props } from '@ngrx/store';
import { Supplier } from '../models/models';

//CRUD
const API_GET_SUPPLIERS = '[SUPPLIERS_PAGE] GET suppliers from an api';
const API_GET_SUPPLIERS_SUCCESS = '[SUPPLIERS_PAGE] GET suppliers from an api SUCCESS';

const API_GET_SUPPLIER_DETAIL = '[SUPPLIERS_PAGE] GET supplier detail from an api';
const API_GET_SUPPLIER_DETAIL_SUCCESS = '[SUPPLIERS_PAGE] GET supplier detail from an api SUCCESS';

const API_ADD_SUPPLIER = '[SUPPLIERS_PAGE] ADD supplier to database';
const API_ADD_SUPPLIER_SUCCESS = '[SUPPLIERS_PAGE] ADD supplier to database SUCCESS';

const API_EDIT_SUPPLIER = '[SUPPLIERS_PAGE] EDIT supplier in database';
const API_EDIT_SUPPLIER_SUCCESS = '[SUPPLIERS_PAGE] EDIT supplier in database SUCCESS';

const API_DELETE_SUPPLIER = '[SUPPLIERS_PAGE] DELETE supplier in database';
const API_DELETE_SUPPLIER_SUCCESS = '[SUPPLIERS_PAGE] DELETE supplier in database SUCCESS';
//API REQUESTS STATUS
const API_ERROR = '[API_STATUS] API request error';
const API_ERROR_CLEAR = '[API_STATUS] clrear API request error';

const CLEAR_SELECTED_SUPPLIER = '[API_STATUS] clear selected supplier';


export const _ApiGetSuppliers = createAction(API_GET_SUPPLIERS);
export function ApiGetSuppliers(): any { return _ApiGetSuppliers; };

export const _ApiGetSuppliersSuccess = createAction(API_GET_SUPPLIERS_SUCCESS, props<{ suppliers: Supplier[] }>());
export function ApiGetSuppliersSuccess(): any { return _ApiGetSuppliersSuccess };

export const _ApiGetSupplierDetail = createAction(API_GET_SUPPLIER_DETAIL, props<{id: string}>());
export function ApiGetSupplierDetail(): any { return _ApiGetSupplierDetail; }

export const _ApiGetSupplierDetailSuccess = createAction(API_GET_SUPPLIER_DETAIL_SUCCESS, props<{supplier: Supplier}>());
export function ApiGetSupplierDetailSuccess(): any { return _ApiGetSupplierDetailSuccess; }

export const _ApiAddSupplier = createAction(API_ADD_SUPPLIER, props<{ supplier: Supplier }>());
export function ApiAddSupplier(): any { return _ApiAddSupplier };

export const _ApiAddSupplierSuccess = createAction(API_ADD_SUPPLIER_SUCCESS, props<{ supplier: Supplier }>());
export function ApiAddSupplierSuccess(): any { return _ApiAddSupplierSuccess; };

export const _ApiEditSupplier = createAction(API_EDIT_SUPPLIER, props<{ id: string, supplier: Supplier }>());
export function ApiEditSupplier(): any { return _ApiEditSupplier; }

export const _ApiEditSupplierSuccess = createAction(API_EDIT_SUPPLIER_SUCCESS, props<{ supplier: Supplier }>());
export function ApiEditSupplierSuccess(): any { return _ApiEditSupplierSuccess; }

export const _ApiDeleteSupplier = createAction(API_DELETE_SUPPLIER, props<{ id: string }>());
export function ApiDeleteSupplier(): any { return _ApiDeleteSupplier };

export const _ApiDeleteSupplierSuccess = createAction(API_DELETE_SUPPLIER_SUCCESS, props<{ supplier: Supplier }>());
export function ApiDeleteSupplierSuccess(): any { return _ApiDeleteSupplierSuccess };

// these will be dispatched by the Effect result
export const _ApiError = createAction(API_ERROR, props<{ error: any }>());
export function ApiError(): any { return _ApiError; }
export const _ApiErrorClear = createAction(API_ERROR_CLEAR, props<{ error: any }>());
export function ApiErrorClear(): any { return _ApiErrorClear; }

export const _StoreClrearSelectedSupplier = createAction(CLEAR_SELECTED_SUPPLIER);
export function StoreClrearSelectedSupplier(): any { return _StoreClrearSelectedSupplier; }
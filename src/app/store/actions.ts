import { createAction, props } from '@ngrx/store';
import { Supplier } from '../models/models';

//CRUD
const API_GET_SUPPLIERS = '[SUPPLIERS_PAGE] GET suppliers from an api';
const API_GET_SUPPLIERS_SUCCESS = '[SUPPLIERS_PAGE] GET suppliers from an api SUCCESS';

const API_GET_SUPPLIER_DETAIL = '[SUPPLIERS_PAGE] GET supplier detail from an api';
const API_ADD_SUPPLIER = '[SUPPLIERS_PAGE] ADD supplier to database';
const API_ADD_SUPPLIER_SUCCESS = '[SUPPLIERS_PAGE] ADD supplier to database SUCCESS';

const API_EDIT_SUPPLIER = '[SUPPLIERS_PAGE] EDIT supplier in database';
const API_DELETE_SUPPLIER = '[SUPPLIERS_PAGE] DELETE supplier in database';


//API REQUESTS STATUS
const API_ERROR = '[API_STATUS] API request error';

// this will be dispatched from some component or service
export const ApiGetSuppliers = createAction(API_GET_SUPPLIERS);
export const ApiGetSuppliersSuccess = createAction(API_GET_SUPPLIERS_SUCCESS, props<{ suppliers: Supplier[] }>());

export const ApiGetSupplierDetail = createAction(API_GET_SUPPLIER_DETAIL, props<{id: string}>());
export const ApiAddSupplier = createAction(API_ADD_SUPPLIER, props<{ supplier: Supplier }>());
export const ApiAddSupplierSuccess = createAction(API_ADD_SUPPLIER_SUCCESS, props<{ supplier: Supplier }>());

export const ApiEditSupplier = createAction(API_EDIT_SUPPLIER, props<{ id: string, supplier: Supplier }>());
export const ApiDeleteSupplier = createAction(API_DELETE_SUPPLIER, props<{ id: string }>());


// these will be dispatched by the Effect result
export const ApiError = createAction(API_ERROR, props<{ error: any }>());

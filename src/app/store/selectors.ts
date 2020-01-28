import { createSelector } from '@ngrx/store';
import { SuppliersState } from './reducer';

const getSelectedData = (state: SuppliersState): any => {
  if (state.suppliers) {
    return state.suppliers
  } else {
    return null;
  }
};
const getLoading = (state: SuppliersState): any => {
  if (state) return state.loading
  else return null;
};
const getSelectedSupplier = (state: SuppliersState): any => {
  if (state.selectedSupplier)
    return state.selectedSupplier;
   else return null;
};

const getErrorFilter = (state: SuppliersState): any => {
  if (state) return state.error
  else return null;
};

const _getLloading = createSelector((state: any) => state.SuppliersState, getLoading);
function getLloading(): any { return _getLloading; }

const _getSuppliers = createSelector(
  (state: { SuppliersState: SuppliersState }) => state.SuppliersState,
  getSelectedData
);
function getSuppliers(): any { return _getSuppliers; }


const _getSupplier = createSelector(
  (state: { SuppliersState: SuppliersState }) => state.SuppliersState,
  getSelectedSupplier
);
function getSupplier(): any { return _getSupplier; }

const _getError = createSelector(
  (state: { SuppliersState: SuppliersState }) => state.SuppliersState,
  getErrorFilter
);
function getError(): any { return _getError; }

export { getLloading, getSuppliers, getSupplier, getError };
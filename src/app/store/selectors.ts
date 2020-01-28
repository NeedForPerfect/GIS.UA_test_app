import { createSelector } from '@ngrx/store';
import { SuppliersState } from './reducer';

const getSelectedData = (state: SuppliersState): any => {
  if (state.suppliers) {
    return state.suppliers
  } else {
    return null;
  }
};
const getLoading = (state: SuppliersState): any => state.loading;
const getSelectedSupplier = (state: SuppliersState): any => {
  if (state.selectedSupplier)
    return state.selectedSupplier;
   else return null;
};

const getLloading = createSelector((state: any) => state.SuppliersState, getLoading);

const getSuppliers = createSelector(
  (state: { SuppliersState: SuppliersState }) => state.SuppliersState,
  getSelectedData
);

const getSupplier = createSelector(
  (state: { SuppliersState: SuppliersState }) => state.SuppliersState,
  getSelectedSupplier
);

export { getLloading, getSuppliers, getSupplier };
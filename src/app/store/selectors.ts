import { createSelector } from '@ngrx/store';
import { SuppliersState } from './reducer';
import { first } from 'rxjs/operators';
import { Supplier } from '../models/models';

const getError = (state: SuppliersState): string => state.error;
const getSelectedData = (state: SuppliersState): any => {
  console.log(state)
  return state.suppliers;
};
const getLoading = (state: SuppliersState): any => state.loading;

const getLloading = createSelector(
  (state: any) => {
    console.log('GET LOADING', state);
    return state.SuppliersState
  },
  getLoading
);

const getSuppliers = createSelector(
  (state: {SuppliersState: SuppliersState}) => {
    console.log('FirstSel', state);
    return state.SuppliersState;
  },
  getSelectedData
);

const selectCombined = createSelector(
  (store: {SuppliersState: SuppliersState}) => store.SuppliersState,
  getSelectedData
)

export { getLloading, getSuppliers, selectCombined};
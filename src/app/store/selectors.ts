import { createSelector } from '@ngrx/store';
import { SuppliersState } from './reducer';
import { Supplier } from '../models/models';

export const selectFeature = (state: SuppliersState) => {
    console.log('First Step');
    return state.suppliers;
};

export const suppliersCount =
  createSelector(
    selectFeature,
    (state, props) => {
        console.log('Second Step');
        return state;
    }
  );

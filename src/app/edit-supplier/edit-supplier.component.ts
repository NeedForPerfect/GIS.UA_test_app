import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Supplier } from '../models/models';
import { Store } from '@ngrx/store';
import { SuppliersState } from '../store/reducer';
import { rootStore } from '../store';
import { UnsubsribedComponent } from '../shared/unsubsribed/unsubsribed.component';
import { ValidateNameNotTaken } from './validator/name-taken.validator';
import { SuppliersService } from '../services/suppliers.service';


@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent extends UnsubsribedComponent implements OnInit {
  editMode: false;
  supplierForm: FormGroup;

  role = new FormControl('');
  roles: string[] = [];
  editedSupplier: Supplier;

  constructor(private fb: FormBuilder, private store: Store<{ SuppliersState: SuppliersState }>, private ss: SuppliersService) {
    super();
  }

  ngOnInit() {
    this.initForm();

    this.subscription.add(this.store.select(rootStore.getSupplier()).subscribe((s) => {
      console.log('Geet Selected', s);
    }));

    this.subscription.add(this.store.select(rootStore.getLloading()).subscribe((loading: boolean) => {
      console.log('Loading', loading);
    }));

  }

  initForm() {
    this.supplierForm = this.fb.group({
      ggn: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]/)], ValidateNameNotTaken.createValidator(this.ss) ],
      country: ['', Validators.required],
      sector: ['', Validators.required]
    });
  }

  addRole() {
    if(!this.role.value) { return };
    this.roles.push(this.role.value);
    this.role.reset();
  }

  deleteRole(index) {
    this.roles.splice(index, 1);
  }

  saveSupplier() {
    let supplier: Supplier = this.supplierForm.value;
    supplier.roles = this.roles;
    this.store.dispatch(rootStore.ApiAddSupplier()({supplier}));
  }

  get title() {
    return this.editMode ? this.editedSupplier.name : 'Add new supplier';
  }

  isInvalid(controlName: string, validatorName: string) {
    return this.supplierForm.get(controlName).hasError(validatorName);
  }

}
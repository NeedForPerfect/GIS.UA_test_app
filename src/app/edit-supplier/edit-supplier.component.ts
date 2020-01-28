import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Supplier } from '../models/models';
import { Store } from '@ngrx/store';
import { SuppliersState } from '../store/reducer';
import { rootStore } from '../store';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {
  editMode: false;
  supplierForm: FormGroup;

  role = new FormControl('');
  roles: string[] = [];
  editedSupplier: Supplier;

  constructor(private fb: FormBuilder, private store: Store<{ SuppliersState: SuppliersState }>) {}

  ngOnInit() {
    this.initForm();

    this.store.select(rootStore.getSupplier).subscribe((s) => {
      console.log('Geet Selected', s);
    });

    this.store.select(rootStore.getLloading).subscribe((loading: boolean) => {
      console.log('Loading', loading);
    });

  }

  initForm() {
    this.supplierForm = this.fb.group({
      ggn: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', Validators.required],
      country: ['', Validators.required],
      sector: ['', Validators.required]
    });
  }

  addRole() {
    this.roles.push(this.role.value);
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

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Supplier } from '../models/models';
import { Store } from '@ngrx/store';
import { SuppliersState } from '../store/reducer';
import { rootStore } from '../store';
import { UnsubsribedComponent } from '../shared/unsubsribed/unsubsribed.component';
import { ValidateNameNotTaken } from './validator/name-taken.validator';
import { SuppliersService } from '../services/suppliers.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0
        })
      ),
      transition('void <=> *', animate(500))
    ])
  ]
})
export class EditSupplierComponent extends UnsubsribedComponent implements OnInit {
  editMode = false;
  supplierForm: FormGroup;

  role = new FormControl('');
  roles: string[] = [];
  editedSupplier: Supplier;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ SuppliersState: SuppliersState }>,
    private ss: SuppliersService,
    private acrivatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.getSupplier();
    this.subscribeStoreSelectors();
  }

  subscribeStoreSelectors() {
    this.subscription.add(
      this.store.select(rootStore.getSupplier()).subscribe((s: Supplier) => {
        this.editedSupplier = s;
        if (s) {
          this.editMode = true;
          this.supplierForm.get('name').clearAsyncValidators();
          this.fillFormWithExistedSupplier(s);
        } else this.editMode = false;
      })
    );
    this.subscription.add(
      this.store.select(rootStore.getLloading()).subscribe((loading: boolean) => (this.loading = loading))
    );
  }

  fillFormWithExistedSupplier(supplier: Supplier) {
    this.supplierForm.setValue({
      ggn: supplier.ggn,
      name: supplier.name,
      country: supplier.country,
      sector: supplier.sector
    });
    this.roles = supplier.roles;
  }

  initForm() {
    this.supplierForm = this.fb.group({
      ggn: ['', [Validators.required, Validators.maxLength(10)]],
      name: [
        '',
        [Validators.required, Validators.pattern(/[a-zA-Z0-9]/)],
        ValidateNameNotTaken.createValidator(this.ss)
      ],
      country: ['', Validators.required],
      sector: ['', Validators.required]
    });
  }

  addRole() {
    if (!this.role.value) {
      return;
    }
    this.roles.push(this.role.value);
    this.role.reset();
  }

  deleteRole(index) {
    this.roles.splice(index, 1);
  }

  saveSupplier() {
    let supplier: Supplier = this.supplierForm.value;
    supplier.roles = this.roles;
    if (this.editMode) {
      const id = this.editedSupplier._id;
      this.store.dispatch(rootStore.ApiEditSupplier()({ id, supplier }));
    } else {
      this.store.dispatch(rootStore.ApiAddSupplier()({ supplier }));
    }
  }

  get title() {
    if (this.editMode && this.editedSupplier) return this.editedSupplier.name;
    else return 'Add new supplier';
  }

  isInvalid(controlName: string, validatorName: string) {
    return this.supplierForm.get(controlName).hasError(validatorName) && this.supplierForm.get(controlName).touched;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(rootStore.StoreClrearSelectedSupplier()());
  }

  getSupplier() {
    this.acrivatedRoute.params.subscribe((params: { id: string }) => {
      const { id } = params;
      if (id) {
        this.store.dispatch(rootStore.ApiGetSupplierDetail()({ id: id }));
      }
    });
  }
}

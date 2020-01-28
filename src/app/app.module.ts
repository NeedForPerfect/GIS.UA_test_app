import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { environment } from '../environments/environment'
import { SuppliersService } from './services/suppliers.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { rootStore } from './store';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { UnsubsribedComponent } from './shared/unsubsribed/unsubsribed.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import { AcceptModalComponent } from './shared/accept-modal/accept-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: SuppliersListComponent },
  { path: 'add', component: EditSupplierComponent },
  { path: 'edit-supplier/:id', component: EditSupplierComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SuppliersListComponent,
    EditSupplierComponent,
    HeaderComponent,
    MenuComponent,
    ContactsComponent,
    AboutComponent,
    UnsubsribedComponent,
    AcceptModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatPaginatorModule,
    EffectsModule.forRoot([rootStore.SuppliersEffects]),
    StoreModule.forRoot({
      SuppliersState: rootStore.SpReducer
    }),
    ReactiveFormsModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [AcceptModalComponent],
  providers: [
    { provide: 'BASE_API_URL', useValue: (<any>environment).local_rest_api_server },
    SuppliersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

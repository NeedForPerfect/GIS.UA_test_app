import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
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

const routes: Routes = [
  { path: '', component: SuppliersListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'edit-supplier/:id', component: EditSupplierComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SuppliersListComponent,
    EditSupplierComponent,
    HeaderComponent,
    LoginComponent,
    AccessDeniedComponent,
    MenuComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: (<any>environment).local_rest_api_server },
    SuppliersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

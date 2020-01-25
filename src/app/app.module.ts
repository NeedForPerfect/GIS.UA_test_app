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

const routes: Routes = [
  { path: '', component: SuppliersListComponent },
  { path: 'edit-supplier/:id', component: EditSupplierComponent }
];

@NgModule({
  declarations: [AppComponent, SuppliersListComponent, EditSupplierComponent, HeaderComponent, LoginComponent, AccessDeniedComponent, MenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) { }


  getSuppliers(): Observable<Supplier[]> {
    return <Observable<Supplier[]>>this.http.get(`${this.baseUrl}/suppliers`);
  }

  addSupplier(supplier: Supplier) {
    return <Observable<Supplier>>this.http.post(`${this.baseUrl}/suppliers`, supplier);
  }

}

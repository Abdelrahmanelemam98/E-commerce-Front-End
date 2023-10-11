import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private baseUrl = 'http://localhost:5268/api/Product';
  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get<any>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  AddProduct(pro: Product) {
    return this.http.post<Product>(this.baseUrl, pro);
  }
  UpdateProduct(pro: Product) {
    return this.http.put<Product>(this.baseUrl + '/' + pro.productCode, pro);
  }
  RemoveProduct(id: number) {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
}

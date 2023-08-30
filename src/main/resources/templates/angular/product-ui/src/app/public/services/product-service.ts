import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api';
  }

  public listAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/products');
  }

  public addProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.url + '/products', product);
  }

  public deleteProductByCode(code: String): Observable<String> {
    return this.http.delete<String>(`${this.url}/products/${code}`, {
      responseType: 'text' as 'json',
    });
  }

  public findProductByCode(code: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products/${code}`);
  }

  public updateProductByCode(
    code: string,
    product: Product
  ): Observable<Product[]> {
    return this.http.put<Product[]>(`${this.url}/products/${code}`, product);
  }
}

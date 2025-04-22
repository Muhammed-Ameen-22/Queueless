import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      { id: 1, name: 'Aashirvad Atta', price: 10, imageUrl: 'assets/store-1.webp' },
      { id: 2, name: 'Product 2', price: 20, imageUrl: 'assets/store-2.webp' },
      { id: 3, name: 'Product 3', price: 30, imageUrl: 'assets/store-2.webp' },
      { id: 4, name: 'Product 4', price: 10, imageUrl: 'assets/store-2.webp' },
      { id: 5, name: 'Product 5', price: 20, imageUrl: 'assets/store-2.webp' },
      { id: 6, name: 'Product 6', price: 30, imageUrl: 'assets/store-2.webp' },
      { id: 7, name: 'Product 7', price: 10, imageUrl: 'assets/store-2.webp' },
      { id: 8, name: 'Product 8', price: 20, imageUrl: 'assets/store-2.webp' },
      { id: 9, name: 'Product 9', price: 30, imageUrl: 'assets/store-2.webp' },
    ];
  }
}

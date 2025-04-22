import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-order-from-store',
  templateUrl: './order-from-store.component.html',
  styleUrl: './order-from-store.component.scss',
  imports: [FormsModule, CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
    MatSelectModule,MatOptionModule
  ],
  standalone: true
})
export class OrderFromStoreComponent implements OnInit {
  products: Product[] = [];
  cart: { product: Product, quantityLabel: string, multiplier: number }[] = [];

  totalAmount: number = 0;
  quantityOptions: string[] = ['100g', '250g', '500g', '1kg', '2kg'];

unitMultipliers: { [key: string]: number } = {
  '100g': 0.1,
  '250g': 0.25,
  '500g': 0.5,
  '1kg': 1,
  '2kg': 2,
};


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onUnitChange(product: Product, selectedLabel: string): void {
    const multiplier = this.unitMultipliers[selectedLabel];
    const existingItem = this.cart.find(item => item.product.id === product.id);
  
    if (existingItem) {
      existingItem.quantityLabel = selectedLabel;
      existingItem.multiplier = multiplier;
    } else {
      this.cart.push({ product, quantityLabel: selectedLabel, multiplier });
    }
  
    this.calculateTotal();
  }
  


  checkout(): void {
    console.log('Proceeding to checkout with the following cart:', this.cart);
  }
  

  getQuantity(product: Product): string {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    return cartItem?.quantityLabel || '1kg'; 
  }
  
  
  calculateTotal(): void {
    this.totalAmount = this.cart.reduce((total, item) => {
      return total + item.product.price * item.multiplier;
    }, 0);
  }
  
}

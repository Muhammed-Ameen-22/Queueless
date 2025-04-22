import { Component, OnInit } from '@angular/core';
import { Shop } from '../../models/shop.model';
import { ShopService } from '../../services/shop/shop.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';


@Component({
  selector: 'app-shop-selection',
  imports: [FormsModule, CommonModule],
  templateUrl: './shop-selection.component.html',
  styleUrl: './shop-selection.component.scss',
  // animations: [
  //   trigger('fade', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('300ms ease-in', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [
  //       animate('300ms ease-out', style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
  
})
export class ShopSelectionComponent implements OnInit {


  shops: Shop[] = [];
  filteredShops: Shop[] = [];
  localities: string[] = [];
  selectedLocality: string = '';
  searchText: string = '';

  constructor(private shopService: ShopService, private router: Router) {}

  ngOnInit(): void {
    this.shops = this.shopService.getShops();
    this.localities = [...new Set(this.shops.map(shop => shop.locality))];
    this.filteredShops = this.shops;
  }

  onFilterChange(): void {
    this.filteredShops = this.shops.filter(shop =>
      (this.selectedLocality ? shop.locality === this.selectedLocality : true) 
      // &&(this.searchText ? shop.items.some(item => item.toLowerCase().includes(this.searchText.toLowerCase())) : true)
    );
  }

  viewShop(id: number): void {
    this.router.navigate(['/order', id]);
  }
}

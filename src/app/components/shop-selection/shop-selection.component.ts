import { Component, OnInit } from '@angular/core';
import { Shop } from '../../models/shop.model';
import { ShopService } from '../../services/shop/shop.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shop-selection',
  imports: [FormsModule, CommonModule],
  templateUrl: './shop-selection.component.html',
  styleUrl: './shop-selection.component.scss'
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
    this.router.navigate(['/shop', id]);
  }
}

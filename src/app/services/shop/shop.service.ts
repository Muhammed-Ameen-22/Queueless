import { Injectable } from '@angular/core';
import { Shop } from '../../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shops: Shop[] = [
    {
      id: 1,
      name: 'JJ Stores',
      location: 'Kochi',
      imageUrl: 'assets/store-1.webp',
      locality: 'MG Road'
    },
    {
      id: 2,
      name: 'PG Traders',
      location: 'Kochi',
      imageUrl: 'assets/store-2.webp',
      locality: 'Palluruthy'
    },
    {
      id: 3,
      name: 'Mary Stores',
      location: 'Kochi',
      imageUrl: 'assets/store-2.webp',
      locality: 'Fort Kochi'
    },
    {
      id: 4,
      name: 'Friends Stores',
      location: 'Kochi',
      imageUrl: 'assets/store-2.webp',
      locality: 'Fort Kochi'
    }
  ];

  getShops(): Shop[] {
    return this.shops;
  }

  getShopById(id: number): Shop | undefined {
    return this.shops.find(shop => shop.id === id);
  }
}

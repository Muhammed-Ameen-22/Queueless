import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews-section',
  imports: [CommonModule],
  templateUrl: './reviews-section.component.html',
  styleUrl: './reviews-section.component.scss'
})
export class ReviewsSectionComponent {

  customerReviews = [
    {
      name: 'Raghu Mahadev',
      avatar: 'assets/customer.png',
      rating: 4,
      review: 'Great service, fast delivery, and friendly staff!'
    },
    {
      name: 'Divya Jacob',
      avatar: 'assets/customer.png',
      rating: 5,
      review: 'Amazing experience! The store offers everything I need.'
    },
    {
      name: ' Jameel Jahan',
      avatar: 'assets/customer.png',
      rating: 5,
      review: 'Well executed! Easy access.'
    }
  ];

  ownerReviews = [
    {
      name: 'Ram Prakash',
      avatar: 'assets/Shop.png',
      rating: 5,
      review: 'Our customers love the ease of shopping with us online!'
    },
    {
      name: 'Prabhu Devan',
      avatar: 'assets/Shop.png',
      rating: 4,
      review: 'Queue management has never been easier!'
    },
    {
      name: 'Sneha Singh',
      avatar: 'assets/Shop.png',
      rating: 4,
      review: 'A fantastic way to organise orders and boost sales.'
    }
  ];

  stars(rating: number): number[] {
    return new Array(rating);
  }

}

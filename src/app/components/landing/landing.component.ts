import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; 
import { ReviewsSectionComponent } from '../reviews-section/reviews-section.component';
@Component({
  selector: 'app-landing',
  imports: [CommonModule,MatIconModule,ReviewsSectionComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  @ViewChild('howItWorksSection') howItWorksSection!: ElementRef;
  selectedTab: 'customer' | 'shopOwner' = 'customer';
  hydrated = false;

  customerSteps = [
    { icon: 'person', title: 'Sign Up / Log In', description: 'Create an account or log in to get started.' },
    { icon: 'storefront', title: 'Choose a Kirana Store', description: 'Browse nearby stores and select one.' },
    { icon: 'shopping_cart', title: 'Add Items to Cart', description: 'Pick your groceries and add them to the cart.' },
    { icon: 'send', title: 'Place Order', description: 'Confirm your items and place the order.' },
    { icon: 'check_circle', title: 'Get Confirmation & Pick Up', description: 'Receive notification and collect your order.' }
  ];

  shopOwnerSteps = [
    { icon: 'store', title: 'Register Your Store', description: 'Sign up and list your store with available products.' },
    { icon: 'mail', title: 'Receive Order Requests', description: 'Customers will send order requests to your store.' },
    { icon: 'inventory', title: 'Review & Confirm Orders', description: 'Check stock and mark unavailable items before confirming.' },
    { icon: 'work', title: 'Prepare the Order', description: 'Pack the items and get them ready for pickup.' },
    { icon: 'notifications_active', title: 'Notify Customers', description: 'Send a notification when the order is ready for pickup.' }
  ];

  scrollToHowItWorks() {
    if (this.howItWorksSection) {
      const elementPosition = this.howItWorksSection.nativeElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = elementPosition - startPosition;
      const duration = 800; // Adjust for speed (800ms = 0.8s)
      let startTime: number | null = null;
  
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
  
        window.scrollTo(0, run);
  
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function easeInOutQuad(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    } else {
      console.error("howItWorksSection is not found!");
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.hydrated = true; // Ensures hydration to fix any SSR issues
    }, 0);
  }
  

}

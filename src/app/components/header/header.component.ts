import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SignInDialogComponent } from '../dialogs/sign-in-dialog/sign-in-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SignInDialogComponent ,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  menuOpen = false;
  isPopupVisible = false; 

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          setTimeout(() => this.scrollToSection(fragment), 100);
        }
      }
    });
  }

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible; 
  }
  

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  navigateToSection(route: string, sectionId: string) {
    this.router.navigate([route], { fragment: sectionId }).then(() => {
      setTimeout(() => this.scrollToSection(sectionId), 500);
    });
    this.closeMenu();
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goToSignUp(event: Event) {
    event.preventDefault();
    this.router.navigate(['/sign-up']);
  }  
  
}
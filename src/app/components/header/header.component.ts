import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SignInDialogComponent } from '../dialogs/sign-in-dialog/sign-in-dialog.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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
  userLoggedIn = false; 
  userEmail: string | null = null;

  constructor(private router: Router,  @Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          setTimeout(() => this.scrollToSection(fragment), 100);
        }
        this.checkLogin(); 
      }
    });
    this.checkLogin();
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

  checkLogin() {
    if (isPlatformBrowser(this.platformId)) {
    const user = localStorage.getItem('user');
    this.userLoggedIn = !!user;
    this.userEmail = user ? JSON.parse(user).email : null;
    }
  }
  
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
    }
    this.userLoggedIn = false;
    this.userEmail = null;
    this.router.navigate(['/']);
  }
  
}
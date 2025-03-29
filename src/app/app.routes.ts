import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ReviewsSectionComponent } from './components/reviews-section/reviews-section.component';

export const routes: Routes = [
    { path: '', component: LandingComponent }, // Homepage
    { path: 'how-it-works', component: LandingComponent },
    { path: 'reviews', component: ReviewsSectionComponent }, // ✅ Ensure this exists
    // { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' } // Redirect invalid URLs
  ];

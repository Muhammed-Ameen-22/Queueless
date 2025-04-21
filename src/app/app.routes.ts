import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ReviewsSectionComponent } from './components/reviews-section/reviews-section.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShopSelectionComponent } from './components/shop-selection/shop-selection.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'how-it-works', component: LandingComponent },
    { path: 'reviews', component: ReviewsSectionComponent },
    { path: 'sign-up', component: SignUpComponent},
    { path:'shop', component:ShopSelectionComponent},
    { path: '**', redirectTo: '' } 
  ];

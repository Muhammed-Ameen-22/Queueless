import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Queueless';
}

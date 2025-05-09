import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import {NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'; 

bootstrapApplication(AppComponent, {
  ...appConfig, 
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),
    provideHttpClient() ,
    NgSelectModule,
    provideAnimations(),
    BrowserAnimationsModule
  ]
}).catch((err) => console.error(err));
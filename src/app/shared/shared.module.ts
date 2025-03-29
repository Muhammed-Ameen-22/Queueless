import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  imports: [NgxTypedJsModule],
  exports: [NgxTypedJsModule] // Export for use in standalone components
})
export class SharedModule { }
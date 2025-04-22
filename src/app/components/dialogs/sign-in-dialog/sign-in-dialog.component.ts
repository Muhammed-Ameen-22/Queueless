import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-dialog',
  standalone: true,
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss'],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class SignInDialogComponent {
  @Output() close = new EventEmitter<void>();
  
  signInForm: FormGroup;
  passwordVisible = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signInForm = this.formBuilder.group({  
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  

  closePopup() {
    this.close.emit();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  login() {
    if (this.signInForm.valid) {
      const email = this.signInForm.value.email;
      const password = this.signInForm.value.password;

      if (email === 'test@example.com' && password === 'password123') {
        alert('Login successful!');
        this.closePopup();
        localStorage.setItem('user', JSON.stringify({ email }));
        this.router.navigate(['/shop']);
      } else {
        alert('Invalid email or password.');
      }
    } else {
      this.signInForm.markAllAsTouched();
    }
  }

  goToSignUp(event: Event) {
    event.preventDefault();
    this.close.emit();
    this.router.navigate(['/sign-up']);
  }  

}
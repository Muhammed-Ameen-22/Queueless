import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule , CommonModule],
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signupForm: FormGroup;
  userType: string | null = null;
  showSignup = false;
  isButtonVisible = false; 


  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      shopName: [''],
      fssaiCode: [''],
      location: ['']
    });
  }

  setUserType(type: string) {
    this.userType = type;
  this.isButtonVisible = true;
  }

  goToSignup() {
    if (this.userType) {
      this.showSignup = true;
    }
  }

  goBack() {
    this.showSignup = false;
    this.userType = null;
    this.isButtonVisible=false
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log("Signup successful!", this.signupForm.value);
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.signupForm.patchValue({
        shopImage: file
      });
    }
  }


}

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule , CommonModule],
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  userType: 'customer' | 'owner' = 'customer';
  signupForm: FormGroup;
  currentImage: string = '../../../assets/landing-image-person.jpg'; 
  customerImage: string = '../../../assets/landing-image-person.jpg';
  ownerImage: string = '../../../assets/Shop.png';
  imageLoaded: boolean = false;

  constructor(private fb: FormBuilder) { 
    this.signupForm = this.fb.group({
      name: [''],
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(6)]],
      shopName: [''],
      shopImage: [''],
      fssaiCode: [''],
      location: [''],
      items: this.fb.array([])
    });
  }


  setUserType(type: 'customer' | 'owner') {
    this.userType = type;
    this.imageLoaded = false;

    if (type === 'customer') {
      this.currentImage = this.customerImage;
      this.signupForm.get('name')?.setValidators([Validators.required]);
      this.signupForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.signupForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);

      this.signupForm.get('shopName')?.clearValidators();
      this.signupForm.get('shopImage')?.clearValidators();
      this.signupForm.get('fssaiCode')?.clearValidators();
      this.signupForm.get('location')?.clearValidators();
    } else {
      this.currentImage = this.ownerImage;
      this.signupForm.get('name')?.clearValidators();
      this.signupForm.get('email')?.clearValidators();
      this.signupForm.get('password')?.clearValidators();

      this.signupForm.get('shopName')?.setValidators([Validators.required]);
      this.signupForm.get('shopImage')?.setValidators([Validators.required]);
      this.signupForm.get('fssaiCode')?.setValidators([Validators.required]);
      this.signupForm.get('location')?.setValidators([Validators.required]);
    }


    this.signupForm.get('name')?.updateValueAndValidity();
    this.signupForm.get('email')?.updateValueAndValidity();
    this.signupForm.get('password')?.updateValueAndValidity();
    this.signupForm.get('shopName')?.updateValueAndValidity();
    this.signupForm.get('shopImage')?.updateValueAndValidity();
    this.signupForm.get('fssaiCode')?.updateValueAndValidity();
    this.signupForm.get('location')?.updateValueAndValidity();
  }

  get items() {
    return this.signupForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.fb.group({
      name: [''],
      quantity: [''],
      rate: ['']
    }));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.signupForm.patchValue({
        shopImage: file
      });
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }
}

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CityService } from '../../services/city/city.service';
import { debounceTime, Subject, switchMap, tap } from 'rxjs';

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
  cities: string[] = [];
  // cityInput$ = new Subject<string>();



  constructor(private fb: FormBuilder, private cityService: CityService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      shopName: [''],
      fssaiCode: [''],
      location: [''],
      city: [''],  
    });
    // this.cityInput$
    // .pipe(
    //   debounceTime(300),
    //   switchMap((query) => this.cityService.getCities(query)),
    //   tap((data) => (this.cities = data)) // Update dropdown options
    // )
    // .subscribe();

    // this.cityService.getAllCities().subscribe((cities) => {
    //   this.cities = cities.filter(city => city.country_code === 'IN');
    // });
    

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

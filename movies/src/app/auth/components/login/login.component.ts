import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading=false;

  constructor(private fb: FormBuilder, private AuthService:AuthService, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit(): void {
  }

 //kjo eshte bere per me hy me enter ne loginform
  submitFormOnEnter(event: any) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.submitForm();
    }
  }


  submitForm() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      const formData = this.loginForm.value;
      console.log(formData);

      this.AuthService.login(formData).subscribe(
        (res: any) => {
          console.log(res);
          if (res == true) {
            this.router.navigate(['categories/all-categories'])
            this.isLoading = false;
          } else {
            window.alert('Your password or email is incorrect')
            this.isLoading = false;
          }
        },
        (error: any) => {
          this.isLoading = false;
        }
      );
    }
  }

  navigateToHome(): void {
    this.router.navigate(['/home']); // Navigate to the home page
  }
}

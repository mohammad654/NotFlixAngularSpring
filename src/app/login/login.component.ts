import { Component,OnInit  } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginValidators } from './login-validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

loginForm = new FormGroup({

  username:new FormControl('',[
  Validators.required,
  Validators.minLength(2),
  Validators.pattern('[a-zA-Z]*'),
  LoginValidators.shouldBeUnique,
  ]),

  password:new FormControl('',[
  Validators.required,
  Validators.minLength(8),
  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ]),

});

get getUserName(){
// *ngIf="loginForm.get('username')?.touched && loginForm.get('username')?.invalid"
return this.loginForm.get('username');
}

login() {
  this.loginForm.setErrors({
    invalidLogin: true
  });
  console.log('this.loginForm.setErrors');
}
 ngOnInit() {
   this.login();
  }

}

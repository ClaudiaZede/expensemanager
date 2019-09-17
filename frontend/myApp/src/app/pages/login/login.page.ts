import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationsForm: FormGroup;
  public alert: string = null;
  public router: Router;

  constructor(router: Router, public formBuilder: FormBuilder, public authService: AuthenticationService) {
    this.router = router;
    this.authService = authService;
  }

  /*
  * Array created for stock the error list of validationsForm
  */
  validationMessages = {
    // tslint:disable-next-line: object-literal-key-quotes
    // Email types and messages error
    'userEmail': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    // Password types and messages error
    'userPassword': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
  };

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      userEmail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      userPassword: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  public login(form) {
    try {
      this.authService.login(form.value);
      this.router.navigateByUrl('/tabs/list');
    } catch (error) {
      this.alert = 'Verifier votre email où password';
    }
  }

}

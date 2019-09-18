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
      { type: 'required', message: 'Email obligatoire.' },
      { type: 'pattern', message: 'Email ne pas valide.' }
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    // Password types and messages error
    'userPassword': [
      { type: 'required', message: 'Password obligatoire.' },
      { type: 'minlength', message: 'Minimun 5 caractères.' },
      { type: 'pattern', message: 'Au moins une majuscule, une minuscule et un numéro.' }
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

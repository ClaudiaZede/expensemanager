import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, NgControlStatusGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  public router: Router;

  public noMatchPasswords: boolean;
  validationsForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private authService: AuthenticationService, router: Router) {
    this.noMatchPasswords = false;
    this.router = router;
  }

  validationMessages = {
    // tslint:disable-next-line: object-literal-key-quotes
    'password': [
      { type: 'required', message: 'Password obligatoire.' },
      { type: 'minlength', message: 'Minimun 5 caractères.' },
      { type: 'pattern', message: 'Au moins une majuscule, une minuscule et un numéro.' }
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    'confirmPassword': [
      { type: 'required', message: 'Confirmation du password obligatoire' }
    ],
    // tslint:disable-next-line: object-literal-key-quotes
    'matchingPasswords': [
      { type: 'areEqual', message: 'Passwords différents.' }
    ],
  };

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  onSubmit(form) {
    this.noMatchPasswords = false;
    if (form.value.password !== form.value.confirmPassword) {
      this.noMatchPasswords = true;
    } else {
      form.value.userEmail = this.authService.user.userEmail;
      console.log(form.value);
      this.apiService.updateUserPassword(form.value).subscribe((user: User) => {
        console.log('Expense updated' , user);
      });
      this.router.navigateByUrl('/tabs/parameters');
    }
  }

}

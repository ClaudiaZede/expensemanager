import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parameters',
  templateUrl: 'parameters.page.html',
  styleUrls: ['parameters.page.scss']
})
export class ParametersPage {

  public router: Router;

  constructor(router: Router, public authService: AuthenticationService, private navCtrl: NavController) {
    this.router = router;
    this.authService = authService;
  }

  public logout() {
      this.authService.logout();
      this.router.navigateByUrl('/tabs/login');
  }

  public goBack(animated = true) {
    this.navCtrl.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Expense } from 'src/app/models/expense';
import { Mission } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { ReaderjsonService } from 'src/app/providers/readerjson.service';
import { NavController } from '@ionic/angular';
import { Society } from 'src/app/models/society';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {

  public user: User;
  public router: Router;
  public expenseTypes;
  missions: Mission[];
  societies: Society[];

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthenticationService, private apiService: ApiService, public expenseService: ExpensesService, router: Router, private navCtrl: NavController, public readerjsonService: ReaderjsonService) {
    this.expenseTypes = this.expenseService.expenseTypes;
    this.router = router;
  }

  ngOnInit() {
    this.apiService.readMissions(this.authService.user.userEmail).subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
    this.apiService.readSocieties().subscribe((societies: Society[]) => {
      this.societies = societies;
    });

  }

  getMissionId(missionName) {
    for (const mission of this.missions) {
      if (mission.missionName === missionName) {
        return mission.missionId;
      }
    }
  }

  getSocietySiret(societyName) {
    for (const society of this.societies) {
      if (society.societyName === societyName) {
        return society.societySiret;
      }
    }
  }

  createOrUpdateCustomer(form) {
    if (this.expenseService.selectedMission && this.expenseService.selectedMission.customerId) {
      form.value.customerId = this.expenseService.selectedMission.customerId;
      form.value.missionId = this.getMissionId(form.value.missionName);
      form.value.societySiret = this.getMissionId(form.value.societyName);
      this.apiService.updateCustomer(form.value).subscribe((mission: Mission) => {
        console.log('Expense updated' , mission);
      });
    } else {
      form.value.missionId = this.getMissionId(form.value.missionName);
      this.apiService.createCustomer(form.value).subscribe((mission: Mission) => {
        console.log('Expense created, ', mission);
      });
    }
    this.router.navigateByUrl('/tabs/customers');
  }

  public goBack(animated = true) {
    this.navCtrl.back();
  }

}


import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Mission } from 'src/app/models/mission';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { ReaderjsonService } from 'src/app/providers/readerjson.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.page.html',
  styleUrls: ['./mission-details.page.scss'],
})
export class MissionDetailsPage implements OnInit {

  public user: User;
  public router: Router;
  public expenseTypes;
  missions: Mission[];
  societies: Mission[];

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthenticationService, private apiService: ApiService, public expenseService: ExpensesService, router: Router, private navCtrl: NavController, public readerjsonService: ReaderjsonService) {
    this.expenseTypes = this.expenseService.expenseTypes;
    this.router = router;

    console.log(this.expenseService.disabledChampsMission);
  }

  ngOnInit() {
    this.apiService.readMissions(this.authService.user.userEmail).subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }

  getCustomerId(customerLastName) {
    for (const mission of this.missions) {
      if (mission.customerLastName === customerLastName) {
        return mission.customerId;
      }
    }
  }

  customerSelected() {
    for (const mission of this.missions) {
      if (mission.customerLastName === this.expenseService.selectedMission.customerLastName) {
        this.expenseService.selectedMission.societyName = mission.societyName;
        this.expenseService.selectedMission.customerFirstName = mission.customerFirstName;
        return this.expenseService.selectedMission;
      }
    }
  }

  createOrUpdateCustomer(form) {
    if (this.expenseService.selectedMission && this.expenseService.selectedMission.missionId) {
      form.value.missionId = this.expenseService.selectedMission.missionId;
      form.value.userEmail = this.authService.user.userEmail;
      form.value.customerId = this.getCustomerId(this.expenseService.selectedMission.customerLastName);
      this.apiService.updateMission(form.value).subscribe((mission: Mission) => {
        console.log('Expense updated' , mission);
      });
    } else {
      form.value.userEmail = this.authService.user.userEmail;
      form.value.customerId = this.getCustomerId(form.value.customerLastName);
      this.apiService.createMission(form.value).subscribe((mission: Mission) => {
        console.log('Expense created, ', mission);
      });
    }
    this.expenseService.disabledChampsMission = true;
    this.router.navigateByUrl('/tabs/missions');
  }

  public goBack(animated = true) {
    this.navCtrl.back();
  }

}


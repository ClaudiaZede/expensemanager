import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Expense } from 'src/app/models/expense';
import { Mission } from 'src/app/models/mission';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { ReaderjsonService } from 'src/app/providers/readerjson.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.page.html',
  styleUrls: ['./expense-details.page.scss'],
})
export class ExpenseDetailsPage implements OnInit {

  public user: User;
  public router: Router;

  public selectedMissionName;
  public selectedExpenseType;
  public expenseTypes;

  missions: Mission[];

  constructor(private authService: AuthenticationService, private apiService: ApiService, public expenseService: ExpensesService, router: Router, private navCtrl: NavController, public readerjsonService: ReaderjsonService) {
    this.expenseTypes = this.expenseService.expenseTypes;
    this.router = router;
  }

  ngOnInit() {
    this.apiService.readMissions(this.authService.user.userEmail).subscribe((missions: Mission[]) => {
      this.missions = missions;
    });

    this.readerjsonService.getRemoteData();
  }

  missionSelected() {
    for (const mission of this.missions) {
      if (mission.missionName === this.expenseService.selectedExpense.missionName) {
        this.expenseService.selectedExpense.societyName = mission.societyName;
        this.expenseService.selectedExpense.customerLastName = mission.customerLastName;
        return this.expenseService.selectedExpense;
      }
    }
  }

  getExpenseMissionId(missionName) {
    for (const mission of this.missions) {
      if (mission.missionName === missionName) {
        return mission.missionId;
      }
    }
  }

  createOrUpdateExpense(form) {
    if (this.expenseService.selectedExpense && this.expenseService.selectedExpense.expenseId) {
      form.value.expenseId = this.expenseService.selectedExpense.expenseId;
      // Change expenseDate to validated format
      form.value.expenseDate = form.value.expenseDate.slice(0, 10);
      form.value.missionId = this.getExpenseMissionId(form.value.missionName);
      this.apiService.updateExpense(form.value).subscribe((expense: Expense) => {
        console.log('Expense updated' , expense);
      });
    } else {
      // Change expenseDate to validated format
      form.value.expenseDate = form.value.expenseDate.slice(0, 10);
      form.value.missionId = this.getExpenseMissionId(form.value.missionName);
      this.apiService.createExpense(form.value).subscribe((expense: Expense) => {
        console.log('Expense created, ', expense);
      });
    }
    this.router.navigateByUrl('/tabs/list');
  }

  public goBack(animated = true) {
    this.navCtrl.back();
  }

}

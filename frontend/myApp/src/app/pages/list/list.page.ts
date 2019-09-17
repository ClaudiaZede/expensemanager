import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Expense } from '../../models/expense';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Mission } from 'src/app/models/mission';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public user: User;
  router: Router;
  expenses: Expense[];

  public activedMission: boolean;
  public activedExpensetype: boolean;
  public activedExpenseDate: boolean;
  public activedExpenseStatus: boolean;
  public activedFilters: boolean;
  public expenseTypes;
  public expensesStatus;

  missions: Mission[];
  public missionName = null;
  public selectedMissionName;
  public expenseType = null;
  public expenseDate = null;
  public expenseStatus = null;

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthenticationService, private apiService: ApiService, private expenseService: ExpensesService, router: Router) {
    this.router = router;
    this.expenseTypes = this.expenseService.expenseTypes;
    this.expensesStatus = this.expenseService.expensesStatus;
    this.activedFilters = true;
    this.activedMission = true;
    this.activedExpensetype = true;
    this.activedExpenseDate = true;
    this.activedExpenseStatus = true;
  }

  ionViewWillEnter() {
    this.apiService.readExpenses(this.authService.user.userEmail).subscribe((expenses: Expense[]) => {
      this.expenses = expenses;
    });
    this.apiService.readMissions(this.authService.user.userEmail).subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }

  selectExpense(expense: Expense) {
    this.expenseService.selectedExpense = expense;
    this.router.navigateByUrl('/tabs/expense-details');
  }

  createExpense() {
    this.expenseService.selectedExpense = new Expense();
    this.router.navigateByUrl('/tabs/expense-details');
  }

  activatedFilterChamps(champ) {
    if (champ ===  null) {
      return true;
    } else {
      return false;
    }
  }

  filterExpenses(form) {
    this.missionName = form.value.missionName;
    this.expenseType = form.value.expenseType;
    this.expenseDate = form.value.expenseDate;
    this.expenseStatus = form.value.expenseStatus;
    this.activedMission = this.activatedFilterChamps(this.missionName);
    this.activedExpensetype = this.activatedFilterChamps(this.expenseType);
    this.activedExpenseDate = this.activatedFilterChamps(this.expenseDate);
    this.activedExpenseStatus = this.activatedFilterChamps(this.expenseStatus);
    // tslint:disable-next-line: max-line-length
    this.apiService.readExpensesFilter(this.authService.user.userEmail, this.missionName, this.expenseType, this.expenseStatus, this.expenseDate).subscribe((expenses: Expense[]) => {
      this.expenses = expenses;
    });
    this.activedFilters = true;
  }

  dismissFilter(value) {
    if (value === this.missionName) {
      this.missionName = null;
      this.activedMission = true;
    }
    if (value === this.expenseType) {
      this.expenseType = null;
      this.activedExpensetype = true;
    }
    if (value === this.expenseDate) {
      this.expenseDate = null;
      this.activedExpenseDate = true;
    }
    if (value === this.expenseStatus) {
      this.expenseStatus = null;
      this.activedExpenseStatus = true;
    }
    if (this.missionName !== null || this.expenseType !== null || this.expenseDate !== null ||  this.expenseStatus !== null) {
      // tslint:disable-next-line: max-line-length
      this.apiService.readExpensesFilter(this.authService.user.userEmail, this.missionName, this.expenseType, this.expenseStatus, this.expenseDate).subscribe((expenses: Expense[]) => {
        this.expenses = expenses;
      });
    } else {
      this.apiService.readExpenses(this.authService.user.userEmail).subscribe((expenses: Expense[]) => {
        this.expenses = expenses;
      });
    }
  }

  deleteExpense(expenseId: number) {
    this.apiService.deleteExpense(expenseId).subscribe((expense: Expense) => {
      console.log('Expense deleted, ', expense);
      this.ionViewWillEnter();
    });
  }

  showFilters() {
    if (this.activedFilters === true) {
      this.activedFilters = false;
    } else {
      this.activedFilters = true;
    }
  }
}

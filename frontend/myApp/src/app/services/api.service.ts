import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Expense } from '../models/expense';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://127.0.0.1:8080';

  constructor(public httpClient: HttpClient) { }

  readUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/readUsers.php`);
  }

  readExpenses(userEmail: string): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(`${this.PHP_API_SERVER}/api/readExpenses.php/?userEmail=${userEmail}`);
  }

  // tslint:disable-next-line: max-line-length
  readExpensesFilter(userEmail: string, missionName: string, expenseType: string, expenseStatus: string, expenseDate: string): Observable<Expense[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<Expense[]>(`${this.PHP_API_SERVER}/api/readExpensesFilter.php/?userEmail=${userEmail}&missionName=${missionName}&expenseType=${expenseType}&expenseStatus=${expenseStatus}&expenseDate=${expenseDate}`);
  }

  readSocieties(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`${this.PHP_API_SERVER}/api/readSocieties.php`);
  }

  readMissions(userEmail: string): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`${this.PHP_API_SERVER}/api/readMissions.php/?userEmail=${userEmail}`);
  }

  readMissionsFilter(userEmail: string, missionName: string, societyName: string): Observable<Mission[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<Mission[]>(`${this.PHP_API_SERVER}/api/readMissionsFilter.php/?userEmail=${userEmail}&missionName=${missionName}&societyName=${societyName}`);
  }




  createExpense(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(`${this.PHP_API_SERVER}/api/createExpense.php`, expense);
  }

  createMission(mission: Mission): Observable<Mission> {
    return this.httpClient.post<Mission>(`${this.PHP_API_SERVER}/api/createMission.php`, mission);
  }



  updateUserPassword(user: User) {
    return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/updateUserPassword.php`, user);
  }

  updateExpense(expense: Expense) {
    return this.httpClient.put<Expense>(`${this.PHP_API_SERVER}/api/updateExpense.php`, expense);
  }

  updateMission(mission: Mission) {
    return this.httpClient.put<Mission>(`${this.PHP_API_SERVER}/api/updateMission.php`, mission);
  }




  deleteExpense(expenseId: number) {
    return this.httpClient.delete<Expense>(`${this.PHP_API_SERVER}/api/deleteExpense.php/?expenseId=${expenseId}`);
  }

}

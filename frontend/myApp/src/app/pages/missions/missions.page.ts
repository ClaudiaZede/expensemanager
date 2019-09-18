import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Mission } from 'src/app/models/mission';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-missions',
  templateUrl: 'missions.page.html',
  styleUrls: ['missions.page.scss']
})
export class MissionsPage {
  public user: User;
  router: Router;

  missions: Mission[];

  public activedMission: boolean;
  public activedSociety: boolean;
  public activedFilters: boolean;

  public missionName = null;
  public societyName = null;

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthenticationService, private apiService: ApiService, private expenseService: ExpensesService, router: Router, private navCtrl: NavController) {
    this.router = router;
    this.activedFilters = true;
    this.activedMission = true;
    this.activedSociety = true;
    this.expenseService.disabledChampsMission = true;
  }

  ionViewWillEnter() {
    this.apiService.readMissions(this.authService.user.userEmail).subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }

  selectMission(mission: Mission) {
    this.expenseService.selectedMission = mission;
    this.router.navigateByUrl('/tabs/mission-details');
  }

  createMission() {
    console.log(this.expenseService.disabledChampsMission);
    this.expenseService.selectedMission = new Mission();
    this.expenseService.disabledChampsMission = false;
    this.router.navigateByUrl('/tabs/mission-details');
  }

  activatedFilterChamps(champ) {
    if (champ ===  null) {
      return true;
    } else {
      return false;
    }
  }

  filterCustomer(form) {
    this.missionName = form.value.missionName;
    this.societyName = form.value.societyName;
    this.activedMission = this.activatedFilterChamps(this.missionName);
    this.activedSociety = this.activatedFilterChamps(this.societyName);
    // tslint:disable-next-line: max-line-length
    this.apiService.readMissionsFilter(this.authService.user.userEmail, this.missionName, this.societyName).subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
    this.activedFilters = true;
  }

  dismissFilter(value) {
    if (value === this.missionName) {
      this.missionName = null;
      this.activedMission = true;
    }
    if (value === this.societyName) {
      this.societyName = null;
      this.activedSociety = true;
    }
    if (this.missionName !== null || this.societyName !== null ) {
      // tslint:disable-next-line: max-line-length
      this.apiService.readMissionsFilter(this.authService.user.userEmail, this.missionName, this.societyName).subscribe((missions: Mission[]) => {
      this.missions = missions;
      });
    } else {
      this.apiService.readMissions(this.authService.user.userEmail).subscribe((missions: Mission[]) => {
        this.missions = missions;
      });
    }
  }

  showFilters() {
    if (this.activedFilters === true) {
      this.activedFilters = false;
    } else {
      this.activedFilters = true;
    }
  }

  public goBack(animated = true) {
    this.navCtrl.back();
  }

}

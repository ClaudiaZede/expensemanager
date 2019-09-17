import { Injectable } from '@angular/core';
import { Expense } from '../models/expense';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  public expenses: Expense[];
  public selectedExpense: Expense;
  public selectedMission: Mission;

  public filters: any = {
    missionName: '',
    expenseType: '',
    expenseDate: ''
  };


  public missions: Mission[];
  public expenseTypes: Array<string> = [
    'Repas',
    'Hôtel',
    'Bus',
    'Avion',
    'Train',
    'Trajet',
    'Essence',
    'Autres'
  ];

  public expensesStatus: Array<string> = [
    'En attente',
    'Remboursé',
    'Refusé'
  ];

  constructor() {}

}

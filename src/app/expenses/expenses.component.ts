import { Component, OnInit} from '@angular/core';
import { CreateExpenseRequest, Expense, ExpensesService } from './expenses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person,PeopleService } from '../people/people.service';

@Component({
  selector: 'app-expenses',
  imports: [CommonModule, FormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  people: Person[] = [];

  description='';
  amount: number | null = null;
  paidByPersonId: number | null = null;
  participantPersonIds: number[] = [];

  constructor(
    private expensesService: ExpensesService,
    private peopleService: PeopleService,
  ){}

  ngOnInit() {
    this.loadExpenses();
    this.loadPeople();
  }

  loadExpenses(){
    this.expensesService.getAll().subscribe(data => this.expenses = data);
  }

  loadPeople(){
    this.peopleService.getAll().subscribe(data => this.people = data);
  }

  addExpense(){
    const desc = this.description.trim();
    if (!desc) return;
    if (this.amount == null || this.amount <= 0) return;
    if (this.paidByPersonId == null) return;
    if (!this.participantPersonIds || this.participantPersonIds.length === 0) return;

    const payload: CreateExpenseRequest = {
      description: desc,
      amount: this.amount,
      paidByPersonId: this.paidByPersonId,
      participantPersonIds: this.participantPersonIds
    };

    this.expensesService.create(payload).subscribe(() => {
      this.description = '';
      this.amount = null;
      this.paidByPersonId = null;
      this.participantPersonIds = [];

      this.loadExpenses();
    })
  }
  
}

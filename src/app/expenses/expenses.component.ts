import { Component, OnInit} from '@angular/core';
import { Expense, ExpensesService } from './expenses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  imports: [CommonModule, FormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expensesService: ExpensesService){}

  ngOnInit() {
    this.expensesService.getAll().subscribe(data => this.expenses = data);
  }
  
}

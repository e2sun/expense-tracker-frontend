import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Expense {
  id: number;
  description: string;
  amount: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private baseUrl = "http://localhost:8080/api/expenses";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Expense[]>(this.baseUrl);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PersonRef{
  id: number;
  name: string;
}

export interface Expense {
  id: number;
  description: string;
  amount: number;
  paidBy: PersonRef;
  participants: PersonRef[];
}

export interface CreateExpenseRequest {
  description: string;
  amount: number;
  paidByPersonId: number;
  participantPersonIds: number[];
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

  create(req: CreateExpenseRequest) {
    return this.http.post<Expense>(this.baseUrl, req);
  }

}

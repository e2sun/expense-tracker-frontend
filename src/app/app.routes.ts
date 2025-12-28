import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { ExpensesComponent } from './expenses/expenses.component';

export const routes: Routes = [
    { path: 'people', component: PeopleComponent},
    { path: 'expenses', component: ExpensesComponent},
    { path: '', redirectTo: 'people', pathMatch: 'full' },
];

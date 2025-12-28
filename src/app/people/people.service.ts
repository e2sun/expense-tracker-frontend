import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Person {
  id: number;
  name: string;
}

@Injectable({providedIn: 'root'})
export class PeopleService {
  private baseUrl = "http://localhost:8080/api/people";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Person[]>(this.baseUrl);
  }

  create(name: string){
    return this.http.post<Person>(this.baseUrl, {name});
  }
}

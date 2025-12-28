import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from './people.service';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})

export class PeopleComponent implements OnInit {

  people: Person[] = [];
  name = '';

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.getAll().subscribe(data => this.people = data);
  }

  addPerson(){
    const n = this.name.trim();
    if (!n) return;

    this.peopleService.create(n).subscribe(() => {
      this.name = '';
      this.loadPeople();
    });
  }

}

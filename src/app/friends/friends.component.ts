/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'friends',
  styleUrls: ['friends.component.css'],
  templateUrl: 'friends.component.html',
})
export class FriendsComponent {
  displayedColumns = ['rank', 'name', 'place', 'age'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  rank: number;
  place: string;
  age: number;
}

const ELEMENT_DATA: Element[] = [
  {rank: 1, name: 'Tata', place: 'Russellville', age:24 },
  {rank: 2, name: 'Mouni', place: 'Hyderabad', age:24 },
  {rank: 3, name: 'Amith', place: 'Tenali', age:24 },
  {rank: 4, name: 'Sandeep', place: 'Chicago', age:24 },
  {rank: 5, name: 'Sravani', place: 'Des Moines', age:24 },
  {rank: 6, name: 'Mouni A', place: 'Des MOines', age: 24},
];

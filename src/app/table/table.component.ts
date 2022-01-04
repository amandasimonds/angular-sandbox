import { Component, OnInit } from '@angular/core';
import { cols } from './cols';
import { data } from './data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  cols = cols;
  data = data;

  constructor() { }

  ngOnInit(): void {
  }

}

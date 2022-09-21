import { Component, OnInit } from '@angular/core';
import { ICON_SET } from "epd-pattern-library"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public icons = ICON_SET;

  constructor() { }

  ngOnInit(): void {
  }

}

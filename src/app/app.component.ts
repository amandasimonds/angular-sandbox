import { BoundElementProperty } from '@angular/compiler';
import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myList = [
    'Water',
    'Vitamins',
    'Apple',
    'Probiotics',
    'Coconut Oil'
  ]

  bundy = {
    leg: 4,
    fur: {
      striped: {
        color1: 'red',
        color2: 'brown'
      }
    }
  }

  bean = {
    leg: 4,
    fur: 'tan'
  }

  color = _.get(this.bean, "fur", this.bean.fur)

  ngOnInit(): void {
    console.log(this.color);
  }

  public arrayStuff() {
    // const myNewArray = _.chunk(this.myList, 3)
    const myNewArray = _.difference(this.myList, ['Water', 'Apple'])
    console.log(myNewArray);
  }
  
}

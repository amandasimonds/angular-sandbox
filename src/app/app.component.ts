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

  numbers =[
    4,
    2,
    5
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

  items = [
    {
      type: 'item',
      name: 'Part',
      selected: false
    },
    {
      type: 'item',
      name: 'Requirement',
      selected: false
    },
    {
      type: 'item',
      name: 'Material',
      selected: false
    },
    {
      type: 'item',
      name: 'Document',
      selected: false
    },
    {
      type: 'item',
      name: 'EXH',
      selected: false
    },
    {
      type: 'item',
      name: 'Stainless Steel',
      selected: false
    }
];

  color = _.get(this.bean, "fur", this.bean.fur)

  ngOnInit(): void {
    const array = this.numbers.map(i => this.items[i]);
    console.log(array);
  }

  public arrayStuff() {
    // const myNewArray = _.chunk(this.myList, 3)
    const myNewArray = _.difference(this.myList, ['Water', 'Apple'])
    console.log(myNewArray);
  }
  
}

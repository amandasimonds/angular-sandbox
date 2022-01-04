import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-animal-wishlist',
  templateUrl: './animal-wishlist.component.html',
  styleUrls: ['./animal-wishlist.component.scss']
})
export class AnimalWishlistComponent implements OnInit {

  animalWishlist = [
    'kleekai',
    'french bulldog',
    'husky',
    'main coone'
  ];

  showItems = false;

  
  onDrop(event: CdkDragDrop<string []>) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  toggleShowItems() {
    this.showItems = !this.showItems;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

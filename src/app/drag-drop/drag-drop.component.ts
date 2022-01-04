import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {

  ownedAnimals = [
    'gerbil',
    'dog',
    'cat',
    'duck'
  ];

  onDrop(event: CdkDragDrop<string []>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

}

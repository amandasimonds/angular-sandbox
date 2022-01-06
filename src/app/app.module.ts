import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AnimalWishlistComponent } from './animal-wishlist/animal-wishlist.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableComponent } from './table/table.component';
import { CustomTableComponent } from './table/custom-table/custom-table.component';
import { RedblackDirective } from './redblack.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimalWishlistComponent,
    DragDropComponent,
    TableComponent,
    CustomTableComponent,
    RedblackDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

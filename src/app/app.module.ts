import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AnimalWishlistComponent } from './animal-wishlist/animal-wishlist.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableComponent } from './table/table.component';
import { CustomTableComponent } from './table/custom-table/custom-table.component';
import { RedblackDirective } from './redblack.directive';
import { CheckNumDirective } from './check-num.directive';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { HideAfterDirective } from './hide-after.directive';
import { AdvancedSearchControlComponent } from './form/form-elements/advanced-search-control/advanced-search-control.component';
import { CustomFormFieldControlComponent } from './form/form-elements/custom-form-field-control/custom-form-field-control.component';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api/api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SearchFieldModule, RegisterIconModule, ICON_SET, RegisterIconDirective } from "epd-pattern-library";
import { FormComponent } from './form/form.component';
import { InputComponent } from './form/form-elements/input/input.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AnimalWishlistComponent,
    DragDropComponent,
    TableComponent,
    CustomTableComponent,
    RedblackDirective,
    CheckNumDirective,
    HomeComponent,
    DirectivesComponent,
    HideAfterDirective,
    AdvancedSearchControlComponent,
    CustomFormFieldControlComponent,
    ApiComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    CommonModule,
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    SearchFieldModule,
    RegisterIconModule.forRoot(ICON_SET)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

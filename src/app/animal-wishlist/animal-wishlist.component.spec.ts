import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalWishlistComponent } from './animal-wishlist.component';

describe('AnimalWishlistComponent', () => {
  let component: AnimalWishlistComponent;
  let fixture: ComponentFixture<AnimalWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

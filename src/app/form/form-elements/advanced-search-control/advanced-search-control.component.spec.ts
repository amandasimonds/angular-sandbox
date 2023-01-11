import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchControlComponent } from './advanced-search-control.component';

describe('AdvancedSearchControlComponent', () => {
  let component: AdvancedSearchControlComponent;
  let fixture: ComponentFixture<AdvancedSearchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

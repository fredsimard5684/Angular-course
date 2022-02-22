import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatTableHeaderComponent } from './custom-mat-table-header.component';

describe('CustomMatTableHeaderComponent', () => {
  let component: CustomMatTableHeaderComponent;
  let fixture: ComponentFixture<CustomMatTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMatTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMatTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

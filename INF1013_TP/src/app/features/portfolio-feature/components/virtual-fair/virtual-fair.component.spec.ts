import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualFairComponent } from './virtual-fair.component';

describe('VirtualFairComponent', () => {
  let component: VirtualFairComponent;
  let fixture: ComponentFixture<VirtualFairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualFairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSetComponent } from './all-set.component';

describe('AllSetComponent', () => {
  let component: AllSetComponent;
  let fixture: ComponentFixture<AllSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

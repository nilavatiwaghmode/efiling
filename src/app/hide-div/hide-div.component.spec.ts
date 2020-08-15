import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideDivComponent } from './hide-div.component';

describe('HideDivComponent', () => {
  let component: HideDivComponent;
  let fixture: ComponentFixture<HideDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

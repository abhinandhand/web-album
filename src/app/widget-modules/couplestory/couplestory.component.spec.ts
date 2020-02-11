import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplestoryComponent } from './couplestory.component';

describe('CouplestoryComponent', () => {
  let component: CouplestoryComponent;
  let fixture: ComponentFixture<CouplestoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouplestoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

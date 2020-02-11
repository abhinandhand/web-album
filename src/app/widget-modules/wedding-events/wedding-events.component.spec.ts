import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingEventsComponent } from './wedding-events.component';

describe('WeddingEventsComponent', () => {
  let component: WeddingEventsComponent;
  let fixture: ComponentFixture<WeddingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

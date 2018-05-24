import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsInputComponent } from './starwars-input.component';

describe('StarwarsInputComponent', () => {
  let component: StarwarsInputComponent;
  let fixture: ComponentFixture<StarwarsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

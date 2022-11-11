import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTodayComponent } from './match-today.component';

describe('MatchTodayComponent', () => {
  let component: MatchTodayComponent;
  let fixture: ComponentFixture<MatchTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCodeComponent } from './email-code.component';

describe('EmailCodeComponent', () => {
  let component: EmailCodeComponent;
  let fixture: ComponentFixture<EmailCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

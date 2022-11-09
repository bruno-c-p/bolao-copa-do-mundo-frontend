import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-password-reset',
  templateUrl: './email-password-reset.component.html',
  styleUrls: ['./email-password-reset.component.scss'],
})
export class EmailPasswordResetComponent implements OnInit {
  email!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  sendPasswordResetLink() {
    this.authService.sendPasswordResetLink(this.email);
  }
}

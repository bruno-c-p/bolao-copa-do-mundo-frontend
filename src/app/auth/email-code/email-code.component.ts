import { AuthService } from './../auth.service';
import { UserEmailCode } from './../../models/user-email-code';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-code',
  templateUrl: './email-code.component.html',
  styleUrls: ['./email-code.component.scss'],
})
export class EmailCodeComponent implements OnInit {
  userEmailCode: UserEmailCode = {};

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userEmailCode.token = params['token'];
    });
  }

  verify() {
    this.authService.verifyEmailCode(this.userEmailCode);
  }

  resendConfirmationCode() {
    this.authService.resendEmailCode(this.userEmailCode);
  }
}

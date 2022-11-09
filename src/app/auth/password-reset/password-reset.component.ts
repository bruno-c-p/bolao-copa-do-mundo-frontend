import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserPassword } from 'src/app/models/user-password';
import { AuthService } from '../auth.service';
import { samePasswordValidator } from './same-password.validator';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {
  passwordFormGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.passwordFormGroup = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', [Validators.required, Validators.minLength(8)]],
        token: [''],
      },
      {
        validators: [samePasswordValidator],
      }
    );

    this.route.params.subscribe((params) => {
      this.passwordFormGroup.patchValue({ token: params['token'] });
    });
  }

  resetPassword(): void {
    console.log(this.passwordFormGroup.value);
    if (this.passwordFormGroup.invalid || this.passwordFormGroup.pending) {
      return;
    }
    this.authService.resetPassword(this.passwordFormGroup.value);
  }
}

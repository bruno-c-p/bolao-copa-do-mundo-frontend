import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup!: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      nickname: [
        '',
        [Validators.required, Validators.maxLength(30)],
        [this.userService.nicknameAlreadyExists()],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
        [this.userService.emailAlreadyExists()],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  register() {
    if (this.registerFormGroup.invalid || this.registerFormGroup.pending) {
      return;
    }

    this.userService.register(this.registerFormGroup.value);
  }
}

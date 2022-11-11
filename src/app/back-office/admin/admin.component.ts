import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  users!: User[];

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  findUserByNickname(nickname: string) {
    this.userService.findAll({ nickname }).subscribe((users) => {
      this.users = users.filter((user) => !user.roles.includes('ROLE_ADMIN'));
    });
  }

  setAdmin(userId: number) {
    this.userService.setAdmin(userId).subscribe(() => {
      this.toastrService.success('O usuário agora é um administrador!');
      this.findUserByNickname('');
    });
  }
}

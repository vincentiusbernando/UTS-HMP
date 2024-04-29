import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {
    console.log(userService.users)
  }

  username = '';
  password = '';

  Login() {
    for (const user of this.userService.users) {
      if (user.username === this.username && user.password === this.password) {
        this.userService.userLogin=user;
        this.router.navigate(["tabs/home"]);
        break;
      }
    }
  }
  ToRegister(){
    this.router.navigate(['register']);
  }
}

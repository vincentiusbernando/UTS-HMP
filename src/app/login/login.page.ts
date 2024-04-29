import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private userService: UserserviceService,
    private router: Router,
    private toastController: ToastController
  ) {
    console.log(userService.users)
  }

  username = '';
  password = '';
  found=false;
  Login() {
    this.found=false;
    for (const user of this.userService.users) {
      if (user.username === this.username && user.password === this.password) {
        this.found=true;
        this.userService.userLogin=user;
        this.router.navigate(["tabs/home"]);
        break;
      }
    }
    if(!this.found){
      this.presentToast("Gagal Login");
    }

  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
  ToRegister(){
    this.router.navigate(['register']);
  }
}

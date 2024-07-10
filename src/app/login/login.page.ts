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
  ) {}

  username = '';
  password = '';
  found = false;
  Login() {
    this.userService
      .Login(this.username, this.password)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          this.userService.userLoginID = response.id;
          this.presentToast('Berhasil Login');
          this.router.navigate(['tabs/home']);
        } else {
          this.presentToast('Gagal Login');
        }
      });
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
  ToRegister() {
    this.router.navigate(['register']);
  }
}

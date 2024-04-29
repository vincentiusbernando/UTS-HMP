import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(
    private userService: UserserviceService,
    private router: Router,
    private toastController: ToastController
  ) {
    console.log(userService.users);
  }

  username = '';
  password = '';
  fullName = '';
  profil = '';
  berhasil = true;
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
  Register() {
    this.berhasil = true;
    for (const user of this.userService.users) {
      if (this.username === user.username) {
        this.presentToast('Username telah terdaftar');
        this.berhasil = false;
      }
    }
    if (this.berhasil) {
      this.userService.addUser(
        this.username,
        this.fullName,
        this.password,
        this.profil
      );
      this.username = '';
      this.password = '';
      this.fullName = '';
      this.profil = '';
      this.presentToast('Username berhasil didaftarkan');
      this.router.navigate(['']);
    }
  }
}

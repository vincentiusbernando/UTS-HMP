import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { KejadianserviceService } from '../kejadianservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage {
  constructor(
    private kejadianService: KejadianserviceService,
    private router: Router,
    private toastController: ToastController,
    private userService: UserserviceService,
  ) {}

  title = '';
  description = '';
  imageUrl = '';
  targetInstitution = '';
  date = '';
  addIncident() {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth() + 1;
    const currentDay: number = currentDate.getDate();
    const currentHour: number = currentDate.getHours();
    const currentMinute: number = currentDate.getMinutes();
    const currentSecond: number = currentDate.getSeconds();
    this.date =
      currentYear +
      '-' +
      currentMonth +
      '-' +
      currentDay +
      ' ' +
      currentHour +
      ':' +
      currentMinute +
      ':' +
      currentSecond;

    this.kejadianService.addKejadian(
      this.userService.userLogin.fullname,
      this.title,
      this.description,
      this.imageUrl,
      this.targetInstitution,
      this.date
    );
    console.log(this.userService.userLogin.fullname);
    this.title = '';
    this.description = '';
    this.imageUrl = '';
    this.targetInstitution = '';
    this.date = '';
    this.presentToast('Kejadian Berhasil Ditambahkan');
    console.log(this.kejadianService.kejadian);
    this.router.navigate(['/tabs/home']);
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
}

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
    private userService: UserserviceService
  ) {}

  title = '';
  description = '';
  imageUrl = '';
  targetInstitution = '';
  date = '';
  addIncident() {
    this.kejadianService
      .addKejadian(
        this.userService.userLoginID,
        this.title,
        this.description,
        this.imageUrl,
        this.targetInstitution
      )
      .subscribe(() => {
        this.title = '';
        this.description = '';
        this.imageUrl = '';
        this.presentToast('Kejadian Berhasil Ditambahkan');
        this.router.navigate(['/tabs/home']);
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
}

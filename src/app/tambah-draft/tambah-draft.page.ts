import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserserviceService } from '../userservice.service';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-tambah-draft',
  templateUrl: './tambah-draft.page.html',
  styleUrls: ['./tambah-draft.page.scss'],
})
export class TambahDraftPage {
  constructor(
    private router: Router,
    private toastController: ToastController,
    private dex: DexieService
  ) {}

  judul = '';
  tujuan = '';
  deskripsi = '';
  gambar = '';
  addDraftIncident() {
    this.dex
      .addItem(this.judul, this.tujuan, this.deskripsi, this.gambar)
      .then(() => {
        alert('Item added successfully.');
      })
      .catch((error) => {
        alert('Error adding item:' + error);
      });

    this.judul = '';
    this.tujuan = '';
    this.deskripsi = '';
    this.gambar = '';
    this.presentToast('Kejadian Berhasil Ditambahkan ke Draft');
    this.router.navigate(['/tabs/draft']);
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

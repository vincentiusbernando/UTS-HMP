import { Component, OnInit } from '@angular/core';
import { DexieService, Kejadian } from '../dexie.service';
import { KejadianserviceService } from '../kejadianservice.service';
import { ToastController } from '@ionic/angular';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.page.html',
  styleUrls: ['./draft.page.scss'],
})
export class DraftPage implements OnInit {
  kejadians: Kejadian[] = [];
  constructor(
    private dex: DexieService,
    private kejadianService: KejadianserviceService,
    private toastController: ToastController,
    private userService: UserserviceService
  ) {}
  async Refresh() {
    this.kejadians = await this.dex.getAllItems();
  }
  ngOnInit() {
    this.Refresh();
  }
  Publish(kejadian: Kejadian) {
    this.kejadianService
      .addKejadian(
        this.userService.userLoginID,
        kejadian.judul,
        kejadian.deskripsi,
        kejadian.gambar,
        kejadian.tujuan
      )
      .subscribe(() => {
        this.presentToast('Kejadian Berhasil Ditambahkan');
      });
    this.dex.removeItem(kejadian.id ?? 0);
    this.Refresh();
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

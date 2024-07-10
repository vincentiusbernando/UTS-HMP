import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface Kejadian {
  id?: number;
  judul: string;
  tujuan: string;
  deskripsi: string;
  gambar: string;
}

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  myKejadians: Dexie.Table<Kejadian, number>;
  constructor() {
    super('MyDatabase');
    this.version(1).stores({
      myKejadians: '++id',
    });
    this.myKejadians = this.table('myKejadians');
  }
  async removeItem(itemId: number): Promise<void> {
    await this.myKejadians.delete(itemId);
  }

  async getAllItems(): Promise<any[]> {
    return this.myKejadians.toArray();
  }
  async addItem(
    judul: string,
    tujuan: string,
    deskripsi: string,
    gambar: string
  ): Promise<void> {
    await this.myKejadians.add({
      judul,
      tujuan,
      deskripsi,
      gambar,
    });
  }
}

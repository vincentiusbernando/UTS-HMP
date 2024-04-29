import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KejadianserviceService {
  constructor() {}
  kejadian = [
    {
      judul: 'Judul Kejadian 1',
      deskripsi: 'Deskripsi Kejadian 1',
      gambar: 'gambar1.jpg',
      tujuan_instansi: 'Instansi A',
      jumlah_like: 15,
      komentar: [
        {
          pengguna: 'User1',
          pesan: 'Komentar pertama',
          jumlah_like: 10,
        },
        {
          pengguna: 'User2',
          pesan: 'Komentar kedua',
          jumlah_like: 5,
        },
      ],
    },
    {
      judul: 'Judul Kejadian 2',
      deskripsi: 'Deskripsi Kejadian 2',
      gambar: 'gambar2.jpg',
      tujuan_instansi: 'Instansi B',
      jumlah_like: 11,
      komentar: [
        {
          pengguna: 'User3',
          pesan: 'Komentar ketiga',
          jumlah_like: 8,
        },
        {
          pengguna: 'User4',
          pesan: 'Komentar keempat',
          jumlah_like: 3,
        },
      ],
    },
  ];
}

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
      date: '2022-2-2 00:00:00',
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
      date: '2022-2-2 00:00:00',
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
  addKejadian(
    title: string,
    description: string,
    imageUrl: string,
    targetInstitution: string,
    date: string
  ) {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth() + 1;
    const currentDay: number = currentDate.getDate();
    const currentHour: number = currentDate.getHours();
    const currentMinute: number = currentDate.getMinutes();
    const currentSecond: number = currentDate.getSeconds();

    this.kejadian.push({
      judul: title,
      deskripsi: description,
      gambar: imageUrl,
      tujuan_instansi: targetInstitution,
      jumlah_like: 0,
      date: date,
      komentar: [],
    });
  }
}

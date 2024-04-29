import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KejadianserviceService {
  constructor() {}
  kejadian = [
    {
      judul: 'Ferdy Sambo Dipenjara',
      deskripsi: '"Terpidana Ferdy Sambo menjalani pidana penjara seumur hidup di Lembaga Permasyarakatan kelas IIA Salemba, Jakarta Pusat," kata Kapuspenkum Kejaksaan Agung (Kejagung) Ketut Sumedana kepada wartawan, Kamis (24/8/2023).',
      gambar: 'https://media.suara.com/pictures/653x366/2023/12/29/90472-ferdy-sambo-dan-putri-candrawathi-igatferdysambo-official.jpg',
      tujuan_instansi: 'POLRI',
      jumlah_like: 15,
      date: '2022-2-2 00:00:00',
      komentar: [
        {
          pengguna: 'VB',
          pesan: 'HAHAHA.. mampus lu',
          jumlah_like: 10,
        },
        {
          pengguna: 'Andre',
          pesan: 'Yaampun kasian banget',
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

  addLike(k_index:any)
  {
    this.kejadian[k_index].jumlah_like++;

  };
}


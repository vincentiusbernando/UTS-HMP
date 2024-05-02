import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KejadianserviceService {
  constructor() {}
  kejadian = [
    {
      pembuat:"Rahmat",
      id: 1,
      judul: 'Macet Parah di Jalan Raya Gubeng',
      deskripsi:
        'Hujan deras yang mengguyur Kota Surabaya sejak sore hari menyebabkan kemacetan parah di Jalan Raya Gubeng. Para pengendara dihimbau untuk mencari jalan alternatif.',
      gambar: 'https://akcdn.detik.net.id/community/media/visual/2023/05/08/potret-kemacetan-di-jalan-kh-abdullah-syafei-tebet-5_169.jpeg',
      tujuan_instansi: 'Pemkot',
      jumlah_like: 82,
      date: '2024-05-02 14:30:00',
      komentar: [
        {
          pengguna: 'Andi',
          pesan: 'Duh, jadi telat meeting nih gara-gara macet.  #SurabayaMacet',
          jumlah_like: 47,
        },
        {
          pengguna: 'Ita',
          pesan:
            'Sabar ya teman-teman, semoga hujan segera reda dan lalu lintas lancar kembali.',
          jumlah_like: 18,
        },
        {
          pengguna: 'Bagas',
          pesan: 'Mungkin bisa naik angkot aja kali ya biar lebih cepet.',
          jumlah_like: 17,
        },
      ],
    },
    {
      pembuat:"Rahma",
      id: 2,
      judul: 'Buaya Berjemur di Sungai Brantas',
      deskripsi:
        'Diinformasikan oleh warga sekitar, buaya dengan panjang sekitar 3 meter tersebut terlihat sedang berjemur di pinggir sungai Brantas pada pagi hari. Warga menghimbau untuk berhati-hati.',
      gambar: 'https://cdn1-production-images-kly.akamaized.net/o5qJypGiZSnj5cW2ZclBYdczNKo=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1578142/original/025876500_1493270690-Buaya8.jpg',
      tujuan_instansi: 'Tidak tahu',
      jumlah_like: 27,
      date: '2024-05-02 10:00:00',
      komentar: [
        {
          pengguna: 'Rina',
          pesan:
            'Ya ampun, serem banget! Semoga petugas segera mengamankan buayanya.',
          jumlah_like: 12,
        },
        {
          pengguna: 'Tomo',
          pesan: 'Wah, bisa jadi konten nih. #BuayaBrantas',
          jumlah_like: 3,
        },
      ],
    },
  ];
  addKejadian(
    pembuat:string,
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

    this.kejadian.unshift({
      pembuat: pembuat,
      id: this.kejadian.length + 1,
      judul: title,
      deskripsi: description,
      gambar: imageUrl,
      tujuan_instansi: targetInstitution,
      jumlah_like: 0,
      date: date,
      komentar: [],
    });
  }
  searchJudul(query: string): any[] {
    return this.kejadian.filter((k) =>
      k.judul.toLowerCase().includes(query.toLowerCase())
    );
  }
  addLike(k_id: any) {
    this.kejadian[k_id - 1].jumlah_like++;
  }
  addLikeComment(k_id: any, c_index: any) {
    this.kejadian[k_id - 1].komentar[c_index].jumlah_like++;
  }
}

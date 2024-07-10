import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KejadianserviceService {
  link = 'https://ubaya.me/hybrid/160421013/';
  constructor(private http: HttpClient) {}
  kejadian = [];

  KejadianList(search: string): Observable<any> {
    return this.http.get(this.link + 'list_kejadian.php?search=' + search);
  }
  DetailKejadian(id: number): Observable<any> {
    return this.http.get(this.link + 'detail_kejadian.php?id=' + id);
  }
  ListComment(id: number): Observable<any> {
    return this.http.get(this.link + 'list_komentar.php?id=' + id);
  }
  AddComment(kejadians_id: number, users_id: number): Observable<any> {
    return this.http.get(
      this.link +
        '.php?kejadians_id=' +
        kejadians_id +
        '&users_id=' +
        users_id
    );
  }
  addKejadian(
    pembuat: string,
    title: string,
    description: string,
    imageUrl: string,
    targetInstitution: string,
    date: string
  ) {
    // this.kejadian.unshift({
    //   pembuat: pembuat,
    //   id: this.kejadian.length + 1,
    //   judul: title,
    //   deskripsi: description,
    //   gambar: imageUrl,
    //   tujuan_instansi: targetInstitution,
    //   jumlah_like: 0,
    //   date: date,
    //   komentar: [],
    // });
  }
  // searchJudul(query: string): any[] {
  //   return this.kejadian.filter((k) =>
  //     k.judul.toLowerCase().includes(query.toLowerCase())
  //   );
  // }
  addLike(k_id: any) {}
}

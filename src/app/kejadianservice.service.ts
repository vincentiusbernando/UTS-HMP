import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  // addLike(k_id: number) {
  //   return this.http.get(this.link + 'like_kejadian.php?id=' + k_id.toString());
  // }

  addLike(k_id: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('id', k_id.toString());
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/hybrid/160421013/like_kejadian.php", urlEncodedData, { headers });
  }
}

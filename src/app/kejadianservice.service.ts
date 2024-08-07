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
  AddComment(
    kejadians_id: number,
    users_id: number,
    new_komentar: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('kejadian_id', kejadians_id.toString());
    body.set('user_id', users_id.toString());
    body.set('pesan', new_komentar);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'add_komentar.php', urlEncodedData, {
      headers,
    });
  }
  addKejadian(
    pembuat: number,
    title: string,
    description: string,
    imageUrl: string,
    targetInstitution: string,
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('pembuat', pembuat.toString());
    body.set('judul', title);
    body.set('tujuan', targetInstitution);
    body.set('deskripsi', description);
    body.set('gambar', imageUrl);
    console.log(pembuat,title,description,imageUrl,targetInstitution);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'add_kejadian.php', urlEncodedData, {
      headers,
    });
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('id', k_id.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.me/hybrid/160421013/like_kejadian.php',
      urlEncodedData,
      { headers }
    );
  }
}

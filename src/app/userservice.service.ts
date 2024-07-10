import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  link = 'https://ubaya.me/hybrid/160421013/';
  constructor(private http: HttpClient) {}
  userLogin: any = {};

  Register(
    username: string,
    fullname: string,
    password: string,
    profile_picture: string
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('fullname', fullname);
    body.set('password', password);
    body.set('profile_picture', profile_picture);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'register.php', urlEncodedData, {
      headers,
    });
  }
  Login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + 'login.php', urlEncodedData, {
      headers,
    });
  }
}

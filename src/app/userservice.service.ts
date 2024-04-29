import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor() {}
  users = [
    {
      username: 'user1',
      fullname: 'User Satu',
      password: 'password1',
      profile_picture: 'profile1.jpg',
    },
    {
      username: 'user2',
      fullname: 'User Dua',
      password: 'password2',
      profile_picture: 'profile2.jpg',
    },
    {
      username: 'user3',
      fullname: 'User Tiga',
      password: 'password3',
      profile_picture: 'profile3.jpg',
    },
  ];
}

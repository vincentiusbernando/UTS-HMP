import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  kejadians: any[] = [];

  constructor(
    private userService: UserserviceService,
    private router: Router,
    private kejadianservice: KejadianserviceService
  ) {
    this.refreshList();
  }
  refreshList() {
    this.kejadianservice.KejadianList('').subscribe((data) => {
      this.kejadians = data;
      console.log(this.kejadians);
    });
  }

  like(id: number) {
    console.log(id);
    this.kejadianservice.addLike(id).subscribe((response: any) => {
      if (response.result === 'success') {
        this.refreshList()
      }
      else {
        alert(response.message)
      }
    });
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  ionViewWillEnter() {
    this.refreshList();
  }

  ngOnInit() {
    this.refreshList();
  }

  Logout() {
    this.userService.userLoginID = 0;
    this.router.navigate(['']);
  }
}

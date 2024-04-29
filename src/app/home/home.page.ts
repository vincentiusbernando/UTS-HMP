import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  kejadians:any[]=[]

  constructor(private router: Router, private kejadianservice: KejadianserviceService) { }

  like(i:number)
  {
  this.kejadianservice.addLike(i);

  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  ngOnInit() {
    this.kejadians=this.kejadianservice.kejadian
  }

}

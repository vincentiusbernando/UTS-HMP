import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KejadianserviceService } from '../kejadianservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  kejadians:any[]=[]
  search=""
  constructor(private router: Router, private kejadianservice: KejadianserviceService) {
    this.kejadianservice.KejadianList(this.search).subscribe((data) => {
      this.kejadians = data;
    });
  }

  like(id: number) {
    this.kejadianservice.addLike(id).subscribe((response: any) => {
      if (response.result === 'success') {
        this.updateDataSource()
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



  ngOnInit() {
    this.kejadians=this.kejadianservice.kejadian
  }
  updateDataSource(){
    // this.kejadians=this.kejadianservice.searchJudul(this.search)
    // console.log(this.kejadians)
    this.kejadianservice.KejadianList(this.search).subscribe((data) => {
      this.kejadians = data;
    });
  }
}

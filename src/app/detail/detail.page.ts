import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  kejadians:any[]=[]
  kejadian:any
  comments:any[]=[]
  constructor(private route: ActivatedRoute, private kejadianservice: KejadianserviceService) { }
  index = 0
  ngOnInit() {
    this.kejadians=this.kejadianservice.kejadian

    this.route.params.subscribe(params => {
      this.index = params['index']; // 'id' should match the route parameter name
      // You can use the 'id' parameter for your logic here
    });
    this.kejadian=this.kejadians[this.index]
    this.comments=this.kejadian.komentar
  }
  like()
  {
  this.kejadianservice.addLike(this.kejadian.id);
  }
  likeComment(i:number)
  {
  this.kejadianservice.addLikeComment(this.kejadian.id,i);
  }

}

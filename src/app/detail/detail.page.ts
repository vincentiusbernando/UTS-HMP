import { Component, OnInit } from '@angular/core';
import { KejadianserviceService } from '../kejadianservice.service';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  kejadian: any = {};
  comments: any[] = [];
  new_comment = '';
  constructor(
    private route: ActivatedRoute,
    private kejadianservice: KejadianserviceService,
    private userService: UserserviceService
  ) {}
  index = 0;
  Refresh() {
    this.route.params.subscribe((params) => {
      this.index = params['index'];
    });
    this.kejadianservice.DetailKejadian(this.index).subscribe((data) => {
      this.kejadian = data[0];
    });
    this.kejadianservice.ListComment(this.index).subscribe((data) => {
      this.comments = data;
    });
  }
  ngOnInit() {
    this.Refresh();
  }
  like() {}
  AddComment(kejadians_id: number) {
    this.kejadianservice
      .AddComment(this.index, this.userService.userLoginID)
      .subscribe();
    this.new_comment = '';
    this.Refresh();
  }
}

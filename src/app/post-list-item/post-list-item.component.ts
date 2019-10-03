import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number;
  @Input() created_at : object;

  constructor() { }

  ngOnInit() {
    console.log(this.loveIts);
  }

  like(){
    this.loveIts = 1;
  }

  disLike() {
    this.loveIts = -1;
  }

}

import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input()
  title;
  @Input()
  content;
  @Input()
  loveIts;
  @Input()
  created_at;
  constructor() { }
  ngOnInit() {
  }
  increment() {
    this.loveIts += 1;
  }
  decrement() {
    this.loveIts -= 1;
  }
}

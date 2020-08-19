import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() postRef: Post;
  @Output() deleted = new EventEmitter<void>();
  constructor() {}
  deletePost() {
    this.deleted.emit();
  }

  ngOnInit(): void {}
}

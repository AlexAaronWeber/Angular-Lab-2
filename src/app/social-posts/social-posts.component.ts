import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: '你叫什么名字？',
      thought: '我叫王安伦',
    },
    {
      title: '喜不喜欢电脑？',
      thought: '我真喜欢电脑的工作',
    },
    {
      title: '你生活美丽吗？',
      thought: '生活好美丽啊',
    },
  ];

  showForm: boolean = false;

  constructor() {}
  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onAdd(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}

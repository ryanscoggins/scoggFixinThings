import { Component, Input } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent {
  constructor(
    private router: Router
  ) {}

  @Input() posts: Post[] = [{
    id: '',
    title: '',
    summary: '',
    content: '',
    createDate: '',
    updateDate: '',
    publishDate: '',
    author: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      createDate: '',
      profile: ''
    }
  }]

  openPost(postId: string) {
    this.router.navigate([`post/${postId}`])
  }
}

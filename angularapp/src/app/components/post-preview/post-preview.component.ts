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

  @Input() posts!: Post[]

  openPost(postId: string) {
    this.router.navigate([`post/${postId}`])
  }
}

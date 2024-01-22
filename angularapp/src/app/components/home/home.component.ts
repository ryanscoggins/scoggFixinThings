import { Component } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/interfaces/post.interface';
import { PostPreviewComponent } from '../post-preview/post-preview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  constructor(
    private postService: PostService
  ) {};
  
  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) =>
      this.posts = data
    )
   }
}

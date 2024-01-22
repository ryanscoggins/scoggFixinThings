import { Component } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  constructor(
    private postService: PostService
  ) {};
  
  allPosts: Post[] = [];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) =>
      this.allPosts = data
    )
   }
}

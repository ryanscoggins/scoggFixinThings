import { Component } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/interfaces/post.interface';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html'
})
export class AllPostsComponent {
  constructor(
    private postService: PostService
  ) {};

  allPosts: Post[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.postService.getPosts().subscribe((data) => {
      this.allPosts = data;
      this.loading = false;
    })
   }

}

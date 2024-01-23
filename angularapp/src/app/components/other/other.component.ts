import { Component } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
})
export class OtherComponent {
  constructor (
    private postService: PostService
  ) {}

  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getPostsByLocation('Other').subscribe((data) =>
      this.posts = data
    )
  }

}

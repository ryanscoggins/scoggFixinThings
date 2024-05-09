import { Component } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
})
export class KitchenComponent {
  constructor (
    private postService: PostService
  ) {}

    posts: Post[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.postService.getPostsByLocation('kitchen').subscribe((data) =>
      this.posts = data
    )
  }
}

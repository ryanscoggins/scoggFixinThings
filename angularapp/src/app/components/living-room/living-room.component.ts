import { Component } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
})
export class LivingRoomComponent {
  constructor (
    private postService: PostService
  ) {}

    posts: Post[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.postService.getPostsByLocation('living').subscribe((data) =>
      this.posts = data
    )
  }
}

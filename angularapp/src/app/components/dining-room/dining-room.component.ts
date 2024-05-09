import { Component } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-dining-room',
  templateUrl: './dining-room.component.html',
})
export class DiningRoomComponent {
  constructor (
    private postService: PostService
  ) {}

    posts: Post[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.postService.getPostsByLocation('dining').subscribe((data) =>
      this.posts = data
    )
  }
}

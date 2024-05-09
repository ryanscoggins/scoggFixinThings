import { Component } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
})
export class BathroomComponent {
  constructor (
    private postService: PostService
  ) {}

    posts: Post[] = [];
  loading: boolean = false;


  ngOnInit(): void {
    this.loading = true;
    this.postService.getPostsByLocation('bathroom').subscribe((data) => {
      this.posts = data;
      this.loading = false;
    }
    )
  }
}

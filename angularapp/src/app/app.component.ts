import { Component } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private postService: PostService
  ) {};
   title = 'angularapp';

   posts: Post[] = [];

   ngOnInit(): void {
    this.postService.getPosts().subscribe((data) =>
      this.posts = data
    )
    console.log('testing')
    console.log(this.posts)
   }
}

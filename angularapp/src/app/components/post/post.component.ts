import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  post!: Post;

  ngOnInit(): void {
    this.getPost();
  }
  
  getPost(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.postService.getIndividualPost(postId).subscribe((data) =>
    {
      this.post = data
    })
  }
}

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
    private postService: PostService,
  ) {}

  post: Post = {
    id: '',
    title: '',
    summary: '',
    content: '',
    createDate: '',
    updateDate: '',
    publishDate: '',
    author: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      createDate: '',
      profile: ''
    },
    images: [],
  };

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.getPost(postId);
  }
  
  getPost(postId: number): void {
    this.postService.getIndividualPost(postId).subscribe((data) =>
    {
      this.post = data
    })
  }
}

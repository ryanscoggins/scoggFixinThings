import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/interfaces/post.interface';
import { Image } from 'src/interfaces/image.interface';
import { ImageService } from 'src/services/image.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private imageService: ImageService
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
    }
  };
  images!: Image[];

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.getPost(postId);
    this.getImages(postId);
  }
  
  getPost(postId: number): void {
    this.postService.getIndividualPost(postId).subscribe((data) =>
    {
      this.post = data
    })
  }

  getImages(postId: number): void {
    this.imageService.getImagesByPostId(postId).subscribe((data) =>
    {
      this.images = data;
    })
  }
}

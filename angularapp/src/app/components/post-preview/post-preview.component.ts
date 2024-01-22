import { Component, Input } from '@angular/core';
import { Post } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent {
  @Input() posts!: Post[]
}

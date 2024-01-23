import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/interfaces/post.interface'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.apiUrl + '/Post';

  constructor(
    private http: HttpClient,
  ) { }

  //get all posts
  getPosts() {
    return this.http.get<Post[]>(this.apiUrl + '/GetAllPosts')
  }

  getPostsByLocation() {
    return this.http.get<Post[]>(this.apiUrl + '/Post')
  }
}

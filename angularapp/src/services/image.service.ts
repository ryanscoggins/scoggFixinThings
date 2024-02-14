import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from 'src/interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private apiUrl = environment.apiUrl + '/Image';

  constructor(
    private http: HttpClient
  ) { }

  getImagesByPostId(postId: number) {
    let params = new HttpParams().set("postId", postId)
    return this.http.get<Image[]>(this.apiUrl + '/GetImagesByPostId', {params: params})
  }
}

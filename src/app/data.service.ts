import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './blog-post';
import { Comment } from './comment';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((data: any) => data.map((post: any) =>
      new BlogPost(
        post.userId,
        post.id,
        post.title,
        post.body
      ))));
  }

  getComments(): Observable<Comment[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(map((data: any) => data.map((comment: any) =>
      new Comment(
        comment.postId,
        comment.id,
        comment.name,
        comment.email,
        comment.body
      ))));
  }
}

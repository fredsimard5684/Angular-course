import {Injectable} from '@angular/core';
import {Post} from './posts.models';
import {map, catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content}
    this.http.post<{ name: string }>(
      'https://testhttp-9a4d5-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData)
    }, error => {
      this.error.next(error.message)
    });
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>('https://testhttp-9a4d5-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'})
      })
      // .pipe(map((responseData: {[key: string] : Post}) => {
      //   const postsArray : Post[] = [];
      //   for (const key in responseData) {
      //     if (responseData.hasOwnProperty(key)) {
      //       postsArray.push( {...responseData[key], id: key})
      //     }
      //   }
      //   return postsArray;
      // }))
      .pipe(map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key})
            }
          }
          return postsArray;
        }), catchError(errorRes => {
          return throwError(errorRes);
        })
      )
  }

  deletePosts() {
    return this.http.delete('https://testhttp-9a4d5-default-rtdb.firebaseio.com/posts.json')
  }

  constructor(private http: HttpClient) {
  }
}

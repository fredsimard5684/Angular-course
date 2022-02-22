import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Post } from './posts.models'
import {PostsService} from './posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false
  error = null;
  private $errorSub: Subscription

  constructor(private postService: PostsService) {
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false
        this.loadedPosts = posts
      })
  }

  ngOnInit() {
    this.$errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage
    })

    this.isFetching = true
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
    console.log(postData);
  }

  onFetchPosts() {
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false
        this.loadedPosts = posts
      }, error => {
        this.error = error.message
      })
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }

  ngOnDestroy(): void {
    this.$errorSub.unsubscribe()
  }
}

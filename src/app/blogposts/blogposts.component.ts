import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../blog-post';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  blogPosts!: BlogPost[];

  post!:number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void{
    // retrieves only first 12 posts instead of 100
    this.dataService.getBlogPosts().subscribe(data => {this.blogPosts = data.slice(0,12)});
  }

  onSelect(post: BlogPost){
    this.post = post.id;
  }
}

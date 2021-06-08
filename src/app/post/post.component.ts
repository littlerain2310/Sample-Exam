import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
//import { BlogPost } from '../blog-post';

import { Comment } from '../comment';

import { DataService } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: number;
  comments!: Comment[];

  constructor(private dataService: DataService) { }

  ngOnChanges(changes){
    if(changes['post']){
      this.getComments();
    }
  }
  
  ngOnInit(): void {
  }

  getComments(): void{
    this.dataService.getComments().subscribe((data)=> {
       this.comments = data.filter((comment)=> comment.postId == this.post);
       console.log(data);
       console.log(this.comments);
    })
  }
}

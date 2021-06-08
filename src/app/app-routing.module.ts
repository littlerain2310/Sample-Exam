import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogpostsComponent } from './blogposts/blogposts.component'; 
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: 'posts', },
  {path: 'comments', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '', component: BlogpostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

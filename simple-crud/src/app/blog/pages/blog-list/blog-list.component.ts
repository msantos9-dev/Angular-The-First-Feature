import { Component, OnInit } from '@angular/core';
import { Blog } from '../../blog.models';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[]= [];

  constructor(private blogService: BlogService) { }

    isShowing = true;
  
    addMyBlogList(event:Blog){
      console.log(event);
    }

    edit(event:Blog){
      console.log(event.id);
    }

    delete(event:Blog){
      console.log(event.id);
    }

  myBlogList: Blog[] = [];

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogList();
  }

}

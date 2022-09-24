import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../blog.models';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blog: Blog | undefined;
  @Output() blogEmitter = new EventEmitter();

  addToReadingList(){
    this.blogEmitter.emit(this.blog);
  }

  edit(){
    this.blogEmitter.emit(this.blog?.id);
  }

  delete(){
    this.blogEmitter.emit(this.blog?.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

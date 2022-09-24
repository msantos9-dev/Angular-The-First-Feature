import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogService } from './pages/blog-list/blog.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [ BlogListComponent, BlogItemComponent ],
  providers: [BlogService],
  imports: [ CommonModule, FormsModule, MatButtonModule],
  exports: [BlogListComponent],
})
export class BlogModule { }

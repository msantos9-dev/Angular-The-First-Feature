import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FormsModule } from '@angular/forms';
import { BookService } from './pages/book-list/book.service';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ BookListComponent, BookItemComponent ],
  providers: [BookService],
  imports: [ CommonModule, FormsModule, MatButtonModule],
  exports: [BookListComponent],
})
export class BookModule { }

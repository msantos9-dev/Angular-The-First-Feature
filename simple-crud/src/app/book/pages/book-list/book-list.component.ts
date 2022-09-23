import { Component, OnInit } from '@angular/core';
import { Book } from '../../models';
import { BookService } from './book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {
  book: Book[]= [];

  constructor(private bookService: BookService) { }

    isShowing = true;
  
    addToReadingList(event:Book){
      console.log(event);
    }

    edit(event:Book){
      console.log(event.id);
    }

    delete(event:Book){
      console.log(event.id);
    }

  readingList: Book[] = [];

  ngOnInit(): void {
    this.book = this.bookService.getBookList();
  }

}

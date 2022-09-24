import { Component, OnInit } from '@angular/core';
import { Book } from '../../book.models';
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
      console.log(event);
    }

    delete(event:Book){
      console.log(event.id);
    }


  ngOnInit(): void {
    this.book = this.bookService.getBookList();
  }

}

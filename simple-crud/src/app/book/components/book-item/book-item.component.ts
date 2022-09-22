import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>;

  addToReadingList(){
    this.bookEmitter.emit(this.book);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

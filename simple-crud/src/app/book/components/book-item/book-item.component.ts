import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../book.models';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book | undefined;
  @Output() bookEmitter = new EventEmitter();

  addToReadingList(){
    this.bookEmitter.emit(this.book);
  }

  edit(){
    this.bookEmitter.emit(this.book?.id);
  }

  delete(){
    this.bookEmitter.emit(this.book?.id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

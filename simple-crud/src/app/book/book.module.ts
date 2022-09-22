import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookModule { }

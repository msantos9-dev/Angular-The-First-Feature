import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';

const routes: Routes = [
  { path: 'app-book-list', component: BookItemComponent },
  { path: 'app-book-item', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

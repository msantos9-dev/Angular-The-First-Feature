import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';

const routes: Routes = [
  { path: 'app-book-list', component: BookListComponent },
  { path: 'app-book-item', component: BookItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

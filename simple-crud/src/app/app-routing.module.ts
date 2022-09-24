import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { UserProfileComponent } from './user/pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'app-book-list', component: BookListComponent },
  { path: 'app-book-item', component: BookItemComponent },
  { path: 'app-blog-list', component: BlogListComponent },
  { path: 'app-blog-item', component: BlogItemComponent },
  { path: 'app-user-profile', component: UserProfileComponent },
  { path: 'app-user-form', component: UserFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

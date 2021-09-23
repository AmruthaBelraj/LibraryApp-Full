import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewBookComponent } from './new-book/new-book.component';
import { AuthGuard } from './auth.guard';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

const routes: Routes = [
  {path:'books',component:BooksComponent},
  {path:'add', canActivate:[AuthGuard], component:NewBookComponent},
  {path:'edit', component:EditBookComponent},
  {path:'update', component:EditAuthorComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'addauthor', canActivate:[AuthGuard], component:NewAuthorComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService:BookService, private router:Router) { }
  bookItem={
    bookName :'',
    bookAuthor :'',
    bookGenre :'',
    imageUrl :''
  }
  ngOnInit(): void {
  }
  AddBook()
  {
    this.bookService.newBook(this.bookItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/books']);
  }
}

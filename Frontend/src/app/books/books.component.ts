import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  // Book is the model class for a book
  books!: BookModel[];
  // image properties
  imageHeight: number = 250;
  imageWidth: number = 250;
  imageMargin: number = 10;

  bookModel=[{
    bookName :'',
    bookAuthor :'',
    bookGenre :'',
    imageUrl :''
  }]

  // creating service object for calling getProducts()
  constructor(private router:Router,private bookService: BookService, private matCardModule: MatCardModule,
              private matGridListModule: MatGridListModule, private matListModule: MatListModule, public _auth:AuthService){
      
  }
  

  ngOnInit(): void {
    // calling getBooks() and loading the books to books array
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['edit']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
    }
}

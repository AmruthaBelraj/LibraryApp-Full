import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookItem= {
    bookName :'',
    bookAuthor :'',
    bookGenre :'',
    imageUrl :''
  }

  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    let bookName = localStorage.getItem("editBookName");
    this.bookService.getBook(bookName).subscribe((data)=>{
    this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookService.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}

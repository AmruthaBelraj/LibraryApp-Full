import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  constructor(private authorService: AuthorService, private router:Router) { }
  authorItem={
  authorName :'',
  bookName :'',
  bookGenre :'',
  imageUrl :''
  }
  ngOnInit(): void {
  }
  AddAuthor()
  {
    this.authorService.newAuthor(this.authorItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/authors']);
  }
}

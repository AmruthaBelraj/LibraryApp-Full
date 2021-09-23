import { Component, OnInit } from '@angular/core';
import { AuthorModel } from './author.model';
import { AuthorService } from '../author.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  // Author is the model class for an author
  authors!: AuthorModel[];
  // image properties
  imageHeight: number = 250;
  imageWidth: number = 250;
  imageMargin: number = 10;

  authorModel=[{
    authorName :'',
    bookName :'',
    bookGenre :'',
    imageUrl :''
  }]
  constructor(private router:Router, private authorService: AuthorService, private matCardModule: MatCardModule,
    private matGridListModule: MatGridListModule, private matListModule: MatListModule, public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
    this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  updateAuthor(author:any)
  {
    localStorage.setItem("updateAuthorData", author._id.toString());
    this.router.navigate(['update']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
    }
}


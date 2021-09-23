import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  authorItem= {
    authorName :'',
    bookName :'',
    bookGenre :'',
    imageUrl :''
  }
  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorName = localStorage.getItem("updateAuthorName");
    this.authorService.getAuthor(authorName).subscribe((data)=>{
    this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  updateAuthor()
  {    
    this.authorService.updateAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }
  }



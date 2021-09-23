import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  item= {
    authorName :'',
    bookName :'',
    bookGenre :'',
    imageUrl :''
  }
  constructor(private http:HttpClient) { }
  getAuthor(id:any){
    return this.http.get("/api/"+id);  }
  getAuthors(){
    return this.http.get("/api/authors");
  }
  newAuthor(item:any)
  {
    return this.http.post("/api/insert/author",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("/api/remove/author/"+id)

  }
  updateAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("/api/update/author",author)
    .subscribe(data =>{console.log(data)})
  }
}

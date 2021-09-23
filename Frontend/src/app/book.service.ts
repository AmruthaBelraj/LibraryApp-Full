import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  item= {
    bookName :'',
    bookAuthor :'',
    bookGenre :'',
    imageUrl :''
  }
  constructor( private http:HttpClient ) { }
  getBook(id:any){
    return this.http.get("/api/"+id);  }
  getBooks(){
    return this.http.get("/api/books");
  }
  newBook(item:any)
  {
    return this.http.post("/api/insert",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete("/api/remove/"+id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("/api/edit",book)
    .subscribe(data =>{console.log(data)})
  }
}

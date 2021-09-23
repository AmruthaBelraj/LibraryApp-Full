import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address:string = '/api';
  loginUser(user:any)
{
  return this.http.post<any>(`${this.server_address}/login`,user)
  
}
  constructor(private http:HttpClient) { }
  loggedIn()
{
  return !!localStorage.getItem('token')
}
getToken()
{
  return localStorage.getItem('token')
}
}
  

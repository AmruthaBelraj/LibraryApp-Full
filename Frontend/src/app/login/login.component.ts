import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={uname:'',
  password:''}
  hide = true;
  constructor(private matFormFieldModule: MatFormFieldModule, private matIconModule: MatIconModule, 
              private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser()
  {
    this._auth.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['books'])
    },
    err => {
      console.log(err);
      this._router.navigate(['/books'])
    })
  }
}

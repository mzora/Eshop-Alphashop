import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato= false
  errMsg='USER O PSW ERRATI'
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAut(){
    if(this.userid==='admin' && this.password ==='admin')
    {
      this.route.navigate(['welcome', this.userid])
      this.autenticato=true;
    }
  }
  
}
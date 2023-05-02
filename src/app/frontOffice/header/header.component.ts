import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  id!:number
  iduser!:number


  constructor(private router: Router,private cookieService: CookieService){}
  ngOnInit(): void {/*
    const userId = localStorage.getItem('session');
    if (userId != null){
      this.id= Number(userId);

    }  }
  
  redirectToProfilePage(): void {
    const userId = localStorage.getItem('session');
    if (userId != null){
      this.iduser= Number(userId);

    }*/
  }
  logout(): void {
    // delete all cookies
    const cookies: string[] = Object.keys(this.cookieService.getAll());
    cookies.forEach((cookie: string) => {
      console.log(cookie)
      this.cookieService.delete(cookie)
    });

    // clear local storage
    localStorage.clear();
  }
}

import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements   OnInit {
    public href: string = "";
    url: string = "asdf";

   constructor(private router : Router) {}


    isNavbarOpen: boolean = false;
    toggleNavbar() {
         this.isNavbarOpen = !this.isNavbarOpen;
       }

search:boolean=false;
text?:string='Login';
link?:string='login';
    ngOnInit() {
          this.hideSearch();
         }

hideSearch(){
        window.setTimeout(() => {
            this.href = this.router.url;
            console.log(this.router.url);
 switch (this.href) {
        case '/login':
          this.link = '/';
          this.text = 'Home';
          this.search=false;
          console.log(this.href);
          break;
           case '/':
          this.text = 'Login';
          this.link = '/login';
          this.search=true;
          console.log(this.href);
          break;
      }
        }, 100);
     }
// go to login in spring boot
      navigateToLogin() {
         window.location.href = 'http://localhost:8080/login';
       }
}


import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
//  isNavbarOpen: boolean = true;
   isNavbarOpen = true;

     @HostListener('window:resize', ['$event'])
     onResize(event: Event) {
       if (window.innerWidth >=1266) {
         this.isNavbarOpen = true; // Close the navbar when the screen width is 968px or more
       }else{
        this.isNavbarOpen =false ;
       }
     }

     toggleNavbar() {
       this.isNavbarOpen = !this.isNavbarOpen;
     }
}

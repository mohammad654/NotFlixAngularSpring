// import { Component } from '@angular/core';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
isScrollVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrollVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

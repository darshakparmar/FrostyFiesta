import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="glass-header" [class.scrolled]="isScrolled">
      <div class="logo">
        <span class="frosty">Frosty</span><span class="fiesta">Fiesta</span>
      </div>
      <button class="menu-toggle" (click)="toggleMenu()" [class.open]="isMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav [class.open]="isMenuOpen">
        <ul>
          <li><a href="#home" (click)="isMenuOpen = false">Home</a></li>
          <li><a href="#about" (click)="isMenuOpen = false">About</a></li>
          <li><a href="#varieties" (click)="isMenuOpen = false">Varieties</a></li>
          <li><a href="#team" (click)="isMenuOpen = false">Team</a></li>
          <li><a href="#contact" (click)="isMenuOpen = false">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styleUrl: './header.css'
})
export class Header {
  isScrolled = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}

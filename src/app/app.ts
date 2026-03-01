import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { Team } from './components/team/team';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Loader } from './components/loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, Products, Team, Contact, Footer, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frosty Fiesta');
  protected readonly isLoading = signal(true);

  constructor() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500); // 1.5s intentional loading time
  }
}

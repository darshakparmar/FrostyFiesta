import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section" id="home">
      <div class="hero-content">
        <h1 class="hero-title">Frosty Fiesta</h1>
        <p class="hero-tagline">"Masti ka Swad, Frosty Fiesta ke Sath!"</p>
        <div class="hero-buttons">
          <a href="#varieties" class="btn-primary">Explore Varieties</a>
          <a href="#about" class="btn-outline">Our Story</a>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </section>
  `,
  styleUrl: './hero.css'
})
export class Hero { }

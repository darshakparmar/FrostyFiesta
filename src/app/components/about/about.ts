import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section" id="about">
      <div class="about-grid">
        <div class="about-text">
          <h2 class="section-title" style="text-align: left;">Sweet Moments, <span class="highlight">Frosty Joy</span></h2>
          <p class="intro">
            Frosty Fiesta is more than just an ice cream brand; it's a celebration of flavors. 
            Starting on <strong>01-02-2026</strong>, our mission has been to provide high-quality, 
            natural ice cream that brings smiles to every face.
          </p>
          <div class="stats-grid">
            <div class="stat-card glass-card">
              <h3>50+</h3>
              <p>Unique Flavors</p>
            </div>
            <div class="stat-card glass-card">
              <h3>10%</h3>
              <p>Special Discount</p>
            </div>
          </div>
          <div class="benefit-card glass-card">
            <p><strong>Customization:</strong> We make ice-cream as per customer requirements. Low cost + High quality = Customer Satisfaction.</p>
          </div>
        </div>
        <div class="about-mv">
          <div class="mv-card glass-card">
            <h3>Our Mission</h3>
            <p>High quality ice-cream, memorable experiences, and becoming the most loved brand through innovation and teamwork.</p>
          </div>
          <div class="mv-card glass-card">
            <h3>Our Vision</h3>
            <p>To spread happiness through every scoop and stay committed to pure, natural, and hygienic production.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about-section {
      background: var(--bg-dark);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 60px;
      align-items: center;
    }

    .highlight { color: var(--secondary); }

    .intro {
      font-size: 1.2rem;
      margin-bottom: 40px;
      color: white;
      opacity: 0.9;
      line-height: 1.8;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px;
      margin-bottom: 30px;
    }

    .stat-card {
      padding: 30px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-card h3 {
      font-size: 3rem;
      color: var(--secondary);
      margin-bottom: 5px;
    }

    .benefit-card {
      padding: 20px 30px;
      background: rgba(152, 255, 152, 0.1);
      border-color: var(--accent);
      color: var(--accent);
    }

    .mv-card {
      padding: 40px;
      margin-bottom: 30px;
      transition: var(--transition);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .mv-card:hover {
      transform: translateX(10px);
      background: rgba(255, 255, 255, 0.15);
      border-color: var(--secondary);
    }

    .mv-card h3 {
      color: var(--secondary);
      font-size: 1.8rem;
      margin-bottom: 15px;
    }

    .mv-card p {
      font-size: 1.1rem;
      opacity: 0.8;
    }

    @media (max-width: 992px) {
      .about-grid { grid-template-columns: 1fr; gap: 40px; }
      .mv-card:hover { transform: translateY(-5px); }
      .section-title { font-size: 2.5rem !important; }
      .intro { font-size: 1.1rem; }
      .stat-card h3 { font-size: 2.5rem; }
    }

  `,
})
export class About { }

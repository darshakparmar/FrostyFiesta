import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact-section" id="contact">
      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="section-title" style="text-align: left;">Visit <span class="highlight">Our Store</span></h2>
          <p class="subtitle" style="text-align: left;">Experience the magic of Frosty Fiesta in person. We love meeting our fans!</p>
          
          <div class="info-item">
            <div class="icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>Dr. Yagnik Road, Rajkot</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">🏭</div>
            <div>
              <h3>Factory</h3>
              <p>Metoda G.I.D.C, 04</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>
        
        <div class="contact-social glass-card">
          <h3>Stay Connected</h3>
          <p>Follow us for the latest flavor launches and special festival offers!</p>
          <div class="social-links">
            <a href="#" class="social-btn ig">Instagram</a>
            <a href="#" class="social-btn fb">Facebook</a>
            <a href="#" class="social-btn wa">WhatsApp</a>
          </div>
          <div class="badge-accent">
            <p><strong>Offer:</strong> 10% Discount on first visit!</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact-section {
      background: var(--bg-dark);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .highlight { color: var(--secondary); }

    .info-item {
      display: flex;
      gap: 20px;
      margin-top: 40px;
      align-items: center;
    }

    .info-item .icon {
      font-size: 2rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 20px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .info-item h3 {
      font-size: 1.5rem;
      color: var(--secondary);
      margin-bottom: 5px;
    }

    .info-item p {
      font-size: 1.1rem;
      opacity: 0.8;
    }

    .contact-social {
      padding: 50px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-social h3 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 30px;
    }

    .social-btn {
      padding: 14px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 700;
      color: white;
      transition: var(--transition);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .ig { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
    .fb { background: #1877F2; }
    .wa { background: #075E54; }

    .social-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }

    .badge-accent {
      margin-top: 40px;
      background: rgba(152, 255, 152, 0.2);
      padding: 20px;
      border-radius: 15px;
      color: var(--accent);
      border: 1px solid var(--accent);
      font-size: 1.1rem;
    }

    @media (max-width: 992px) {
      .contact-grid { grid-template-columns: 1fr; gap: 40px; }
      .section-title { font-size: 2.5rem !important; }
      .info-item { margin-top: 25px; }
      .contact-social { padding: 30px 20px; }
    }

  `,
})
export class Contact { }

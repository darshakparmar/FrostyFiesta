import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h2 class="logo"><span class="frosty">Frosty</span><span class="fiesta">Fiesta</span></h2>
          <p>"Masti ka Swad, Frosty Fiesta ke Sath!"</p>
        </div>
        <div class="footer-copy">
          <p>&copy; 2026 Frosty Fiesta Ice Cream Company. All rights reserved.</p>
          <p>Created with 🍦 for ice cream lovers everywhere.</p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background: var(--primary);
      color: white;
      padding: 60px 10% 30px;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
    }

    .logo {
      font-family: 'Alice', serif;
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .frosty { color: white; }
    .fiesta { color: var(--secondary); }

    .footer-brand p {
      opacity: 0.8;
      font-style: italic;
    }

    .footer-copy {
      text-align: right;
      font-size: 0.9rem;
      opacity: 0.6;
    }

    @media (max-width: 768px) {
      .footer-content { flex-direction: column; text-align: center; }
      .footer-copy { text-align: center; }
    }
  `,
})
export class Footer { }

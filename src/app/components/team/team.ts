import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="team-section" id="team">
      <div class="content-header">
        <h2 class="section-title">Meet the <span class="highlight">Dream Team</span></h2>
        <p class="subtitle">The passionate minds behind every creamy scoop of Frosty Fiesta.</p>
      </div>
      <div class="team-grid">
        @for (member of teamMembers; track member.name) {
          <div class="team-card glass-card">
            <div class="avatar">{{ member.name.charAt(0) }}</div>
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .team-section {
      background: var(--bg-dark);
      padding: 100px 10%;
    }

    .content-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-title {
      font-size: 3rem;
      color: var(--text-light);
      margin-bottom: 10px;
    }

    .highlight { color: var(--secondary); }

    .subtitle {
      font-size: 1.1rem;
      color: var(--text-light);
      opacity: 0.8;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 40px;
      margin-top: 50px;
    }

    .team-card {
      padding: 40px 20px;
      text-align: center;
      transition: var(--transition);
      border: 1px solid var(--glass-border);
    }

    .team-card:hover {
      transform: translateY(-10px);
      border-color: var(--secondary);
      background: rgba(255, 255, 255, 0.15);
    }

    .avatar {
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 auto 25px;
      border: 2px solid var(--glass-border);
    }

    .team-card h3 {
      font-size: 1.6rem;
      color: white;
      margin-bottom: 10px;
    }

    .role {
      font-size: 1.1rem;
      color: var(--secondary);
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    @media (max-width: 600px) {
      .team-grid { grid-template-columns: 1fr; gap: 30px; }
      .team-card h3 { font-size: 1.4rem; }
      .section-title { font-size: 2.5rem; }
    }

  `,
})
export class Team {
  teamMembers = [
    { name: 'Hasti Akabari', role: 'CEO' },
    { name: 'Khushi Devani', role: 'Production Manager' },
    { name: 'Dharmi Sidpara', role: 'Finance Manager' },
    { name: 'Tanvi Khunt', role: 'Marketing Manager' },
    { name: 'Jenisha Busa', role: 'Social Media Manager' },
    { name: 'Charmi Chovatiya', role: 'Sales Manager' },
    { name: 'Zalak Parmar', role: 'Purchase Manager' },
    { name: 'Dhruvisha Tank', role: 'Customer Service Head' },
    { name: 'Krisha Shingala', role: 'Operations Manager' },
  ];
}

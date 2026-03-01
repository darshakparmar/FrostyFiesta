import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="products-section" id="varieties">
      <div class="content-header">
        <h2 class="section-title">Our <span class="highlight">Product</span> Varieties</h2>
        <p class="subtitle">Explore our diverse range of premium ice creams, crafted for every palate.</p>
      </div>

      <div class="flavor-grid">
        @for (variety of varieties; track variety.name) {
          <div class="flavor-card glass-card">
            <div class="image-container">
              <img [src]="variety.image" [alt]="variety.name" class="variety-image">
              <div class="tag">{{ variety.tag }}</div>
            </div>
            <div class="card-content">
              <h3>{{ variety.name }}</h3>
              <p>{{ variety.description }}</p>
            </div>
          </div>
        }
      </div>

      <div class="cta-more">
        <p>...and 50+ more unique flavors curated just for you!</p>
      </div>
    </section>
  `,
  styles: `
    .products-section {
      background: var(--bg-dark);
      padding-top: 120px;
    }

    .highlight { color: var(--secondary); }

    .flavor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .flavor-card {
      overflow: hidden;
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .flavor-card:hover {
      transform: translateY(-10px);
      border-color: var(--secondary);
      background: rgba(255, 255, 255, 0.15);
    }

    .image-container {
      position: relative;
      height: 250px;
      width: 100%;
      overflow: hidden;
    }

    .variety-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .flavor-card:hover .variety-image {
      transform: scale(1.1);
    }

    .tag {
      position: absolute;
      top: 15px;
      right: 15px;
      background: var(--secondary);
      color: var(--primary);
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .card-content {
      padding: 25px;
      text-align: center;
    }

    .card-content h3 {
      font-size: 1.8rem;
      color: white;
      margin-bottom: 15px;
    }

    .card-content p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
    }

    .cta-more {
      text-align: center;
      margin-top: 80px;
      font-style: italic;
      color: var(--secondary);
      font-size: 1.3rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .section-title { font-size: 2.5rem; }
    }
  `,
})
export class Products {
  varieties = [
    {
      name: 'Blueberry Candy',
      description: 'A delightful burst of tangy blueberry flavor in every bite of this frozen candy treat.',
      image: '/assets/images/Candy/Candy_BlueBerry.png',
      tag: 'Candy'
    },
    {
      name: 'Chocolate Candy',
      description: 'Rich, velvety chocolate goodness frozen into a perfect candy bar experience.',
      image: '/assets/images/Candy/Candy_Chocolate.png',
      tag: 'Candy'
    },
    {
      name: 'Mango Candy',
      description: 'The tropical sweetness of real Alphonso mangoes captured in a refreshing frozen candy.',
      image: '/assets/images/Candy/Candy_Mango.png',
      tag: 'Candy'
    },
    {
      name: 'Strawberry Candy',
      description: 'Sweet and luscious strawberry flavor that melts-in-your-mouth with every candy stick.',
      image: '/assets/images/Candy/Candy_Strawberry.png',
      tag: 'Candy'
    },
    {
      name: 'Vanilla Candy',
      description: 'Classic, creamy vanilla flavor in a convenient and delicious candy format.',
      image: '/assets/images/Candy/Candy_Vanilla.png',
      tag: 'Candy'
    },
    {
      name: 'Caramel Corn',
      description: 'The perfect blend of buttery caramel and crunchy frozen corn for a unique dessert.',
      image: '/assets/images/Corn/Corn_Caramel.png',
      tag: 'Corn'
    },
    {
      name: 'Chocolate Corn',
      description: 'Wait for the chocolatey surprise in this crunchy and creamy frozen corn delight.',
      image: '/assets/images/Corn/Corn_Chocolate.png',
      tag: 'Corn'
    },
    {
      name: 'Strawberry Corn',
      description: 'A fruity twist on our classic corn variety, featuring sweet strawberry swirls.',
      image: '/assets/images/Corn/Corn_Strawberry.png',
      tag: 'Corn'
    },
    {
      name: 'BlackCurrent Scoop',
      description: 'Deep, rich blackcurrant flavor in a smooth and creamy scoop for berry lovers.',
      image: '/assets/images/Scoops/Scoop_BlackCurrent.png',
      tag: 'Scoops'
    },
    {
      name: 'Blueberry Scoop',
      description: 'Fresh and vibrant blueberry notes blended into our signature premium ice cream scoop.',
      image: '/assets/images/Scoops/Scoop_BlueBerry.png',
      tag: 'Scoops'
    },
  ];
}

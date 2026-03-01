import { Component } from '@angular/core';

@Component({
    selector: 'app-loader',
    standalone: true,
    template: `
    <div class="loader-overlay">
      <div class="ice-cream-loader">
        <div class="ice-cream">
          <div class="scoop strawberry"></div>
          <div class="scoop mango"></div>
          <div class="scoop blueberry"></div>
          <div class="cone"></div>
        </div>
        <div class="loader-text">
          <span class="frosty">Frosty</span><span class="fiesta">Fiesta</span>
          <p>Preparing your sweetness...</p>
        </div>
      </div>
    </div>
  `,
    styles: `
    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #422E85;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .ice-cream-loader {
      text-align: center;
    }

    .ice-cream {
      position: relative;
      width: 100px;
      height: 150px;
      margin: 0 auto 30px;
    }

    .cone {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 80px;
      background: #E3B066;
      clip-path: polygon(0 0, 100% 0, 50% 100%);
      z-index: 1;
    }

    .scoop {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      opacity: 0;
      animation: scoop-fall 0.8s forwards;
    }

    .strawberry {
      background: #FFB7C5;
      bottom: 60px;
      animation-delay: 0.2s;
    }

    .mango {
      background: #FFCC33;
      bottom: 90px;
      animation-delay: 0.6s;
    }

    .blueberry {
      background: #6495ED;
      bottom: 120px;
      animation-delay: 1s;
    }

    @keyframes scoop-fall {
      0% {
        transform: translate(-50%, -100px);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }

    .loader-text {
      font-family: 'Alice', serif;
    }

    .frosty {
      color: white;
      font-size: 2.5rem;
      font-weight: 700;
    }

    .fiesta {
      color: #FFB7C5;
      font-size: 2.5rem;
      font-weight: 700;
    }

    .loader-text p {
      color: white;
      opacity: 0.8;
      margin-top: 10px;
      font-style: italic;
      letter-spacing: 1px;
    }
  `
})
export class Loader { }

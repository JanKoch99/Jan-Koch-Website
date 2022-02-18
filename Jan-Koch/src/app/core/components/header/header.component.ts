import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/">
          <img src="assets/img/Jan_Face.png">
        </a>
        <a (click)="toggleNavbar()" role="button" #navBurger class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      
      <!-- Menu -->
      <div class="navbar-menu" #navMenu>
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="/contact">Contact</a>
          
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Mein Leben
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" routerLink="/future">
                Zukunft
              </a>
              <a class="navbar-item" routerLink="/presence">
                Gegenwart
              </a>
              <a class="navbar-item" routerLink="/past">
                Vergangenheit
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  @ViewChild('navBurger') navBurger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }


  constructor() { }

  ngOnInit(): void {

  }


}

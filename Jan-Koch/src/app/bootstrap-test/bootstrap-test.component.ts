import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-test',
  template: `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-xxl">
        <a href="#intro" class="navbar-brand">
          <span class="fw-bold text-secondary">
            Jan Koch
          </span>
        </a>
        <!-- Burger -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Navbar links -->
        
        <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/future">Future</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/presence">Presence</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- Main image and intro text -->
    <section id="intro">
      <div class="container-lg">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-5 text-center text-md-start">
            <h1>
              <div class="display-2">Jan Koch</div>
              <div class="display-5 text-muted">Willkommen zu meiner Website über mich und mein Leben</div>
            </h1>
          </div>
          <div class="col-md-5 text-center d-none d-md-block">
            <img class="img-fluid" src="/assets/img/Jan_Weiss.png" alt="Jan">
          </div>
        </div>
      </div>
    </section>
    
    
    
  `,
  styles: [
  ]
})
export class BootstrapTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

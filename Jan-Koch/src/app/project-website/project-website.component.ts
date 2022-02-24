import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-website',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="is-size-1">
              Erstellung dieser Website
            </h1>
          </div>
        </div>
      </div>
    </section>


    <div class="section">
      <div class="container">
        
        <!-- The start -->
        <div class="columns mt-4">
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="subtitle">Der Start</p>
                  <p>
                    Aller Anfang ist schwer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formatierung -->
            <div class="column is-6">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="subtitle">Die Formatierung</p>
                    <p>
                      Jede Formatierung ist schwer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
        
        
      </div>
    </div>   
    
  `,
  styles: [
  ]
})
export class ProjectWebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

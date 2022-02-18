import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presence',
  template: `
    <!-- Hero with title -->
    <section class="hero is-primary is-bold is-medium is-info">
      <div class="hero-body has-text-centered">
        <div class="container has-text-centered">
          <h1 class="title is-size-2 has-text-weight-semibold shadow">
            Gegenwart
          </h1>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          
          <!-- Universität Bern -->
          <div class="column is-4">
            <h3 class="is-size-3">
              Universität Bern
            </h3>
            
            <p class="py-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          
          <div class="column is-4">
            <!-- whitespace -->
          </div>
          
          <div class="column is-4">
            <img src="/assets/img/placeholder/placeholder.png">
          </div>
          
        </div>

        <!-- Schimmlehrer -->
        <div class="columns is-vcentered">
          <div class="column is-4 is-hidden-mobile">
              <img src="/assets/img/placeholder/placeholder.png">

            
          </div>

          <div class="column is-4 is-hidden-mobile">
            <!-- whitespace -->
          </div>

          <div class="column is-4">
            <h3 class="is-size-3">
              Schwimmlehrer
            </h3>
            <p class="py-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div class="column is-4 is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only is-hidden-fullhd-only">
            <!-- whitespace -->
          </div>

          <div class="column is-4 is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only is-hidden-fullhd-only">
            <img src="/assets/img/placeholder/placeholder.png">
          </div>
          
        </div>

        <!-- Motorrad -->
        <div class="columns is-vcentered">
          <div class="column is-4">
            <h3 class="is-size-3">
              Motorrad
            </h3>

            <p class="py-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div class="column is-4">
            <!-- whitespace -->
          </div>

          <div class="column is-4">
            <img src="/assets/img/placeholder/placeholder.png">
          </div>

        </div>
        
        
      </div>
    </section>
  `,
  styles: [
    '.hero { background-image: url("/assets/img/water.png")!important; background-size: cover; background-position: center center}',
    '.shadow{text-shadow: 0 0 5px black}'
  ]
})
export class PresenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

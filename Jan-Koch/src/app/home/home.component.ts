import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      
      <!-- Hero with title -->
    <section class="hero is-primary is-bold is-medium">
      <div class="hero-body has-text-centered">
        <div class="container has-text-centered">
          <h1 class="title is-size-2 has-text-weight-semibold shadow">
            Jans Homepage
          </h1>
        </div>
      </div>
    </section>
      
      
      <!-- Introduction -->
      
      <section class="section">
          <div class="container">
              <div class="columns is-vcentered">
                  <div class="column is-6">
                      <h1 class="is-size-1">
                          Willkommen zu meiner Website über mich und mein Leben
                      </h1>
                      
                      <p class="py-4">
                          Auf dieser Website möchte ich mein Leben aufzeigen. Was ich alles schon erlebt habe,
                          womit ich mich im Moment beschäftige und wie ich mir meine Zukunft erhoffe. Zudem werde ich 
                          diese Website andauernd verbessern und werde versuchen neue Eigenschaften hinzuzufügen.
                      </p>
                  </div>
                  
                  <div class="column is-6">
                      <img src="assets/img/Jan_Weiss.png">
                  </div>
              </div>
          </div>
      </section>
      
      <!-- Future, Now, Past -->
      
      <div class="section has-background-white-ter">
          <div class="container">
              <div class="columns is-centered">
                  <div class="column has-text-centered">
                      <h2 class="is-size-2">
                          Zukunft - Gegenwart - Vergangenheit
                      </h2>
                  </div>
              </div>
              
              <!-- Zukunft -->
              <div class="columns mt-4">
                  <div class="column is-4">
                      <div class="card">
                          <div class="card-content">
                              <div class="content">
                                  <p class="subtitle">Zukunft</p>
                                  <p>
                                      Mein Wunsch ist es Fuss zu fassen in der Informatikbranche, bei welcher ich einen spannenden
                                      Beruf ausführen kann, mein Leben selbstständig gestalten zu dürfen und viele nette
                                      Menschen kennen zu lernen.
                                  </p>
                                  <a href="/">Weiterlesen</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <!-- Gegenwart -->
                  <div class="column is-4">
                      <div class="card">
                          <div class="card-content">
                              <div class="content">
                                  <p class="subtitle">Gegenwart</p>
                                  <p>
                                      Im Moment bin ich an der Universität Bern am studieren, arbeite nebenbei als Schwimmlehrer
                                      und erkunde mit meinem Motorrad die wunderschöne Schweiz.
                                  </p>
                                  <a href="/">Weiterlesen</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <!-- Vergangenheit -->
                  <div class="column is-4">
                      <div class="card">
                          <div class="card-content">
                              <div class="content">
                                  <p class="subtitle">Vergangenheit</p>
                                  <p>
                                      Als kleines Kind musste ich gegen eine furchtbare Krankheit kämpfen, als Teenager konnte
                                      ich erfolgreich das Gymnasium abschliessen und als junger erwachsener konnte ich mir mein
                                      Traum vom eigenen Motorrad erfüllen.
                                  </p>
                                  <a href="/">Weiterlesen</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
      
      <!-- Fun stuff -->
    
    
  `,
  styles: [
      '.hero { background-image: url("/assets/img/water.png")!important; background-size: cover; background-position: center center}',
      '.shadow{text-shadow: 0 0 5px black}'
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

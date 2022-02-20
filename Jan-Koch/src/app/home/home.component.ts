import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      
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
                                  <a href="/future">Weiterlesen</a>
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
                                  <a href="/presence">Weiterlesen</a>
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
                                      Als kleines Kind musste ich gegen eine furchtbare Krankheit kämpfen, als ich ein bisschen älter war, 
                                      versuchte ich mich beim Mountainbiken und als Teenager konnte
                                      ich erfolgreich das Gymnasium abschliessen.
                                  </p>
                                  <a href="/past">Weiterlesen</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
      
      <!-- How and why did I do this Website-->
      
      <div class="section">
          <div class="container">
              <div class="columns is-centered">
                  <div class="column has-text-centered">
                      <h2 class="is-size-2">Erstellung dieser Website</h2>
                  </div>
              </div>
          </div>
          <div class="container has-text-centered">
              <p>
                  Alles begann damit, dass mein Vater die Website, welche er für mich erstellt hat, vom Netz nehmen wollte.
                  Ich begann mich zu informieren wie schwierig es ist, eine solche von Grund auf selbst zu erstellen. Da es nach sehr viel
                  Arbeit aussah, verschob ich dieses Projekt auf unbekannte Zeit, da ich frisch mit dem Studium begann und nicht viel Zeit
                  für solche Sachen hatte. Per Zufall mussten wir dann an der Universität selbst eine Website programmieren. Als diese fertig war, 
                  nutze ich mein neu erlangtes Wissen, um dieses Projekt zu beginnen.
              </p>
              <a href="/project-website">Weiterlesen</a>
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

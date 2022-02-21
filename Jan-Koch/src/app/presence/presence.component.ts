import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presence',
  template: `

    
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <h1 class="is-size-1">
                Gegenwart
              </h1>
            </div>
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
              An der Universität Bern habe ich 2021 mit meinem Studiengang "<em>Bachelor of Science in Computer Science</em>"
              begonnen. Das Hauptfach Informatik bereitet mir mit abstand am meisten Freude, da ich mich ausleben kann 
              und mir sehr viel Wissen aneignen kann. Meine Nebenfächer sind Wirtschaft und Mathematik. Mit diesen beiden bin 
              ich sehr zufrieden, obwohl die Mathematik sehr herausfordernd ist und ich dort viel Zeit und Geduld investieren muss.
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
              <img src="/assets/img/Jan_Schwimmen.png">

            
          </div>

          <div class="column is-4 is-hidden-mobile">
            <!-- whitespace -->
          </div>

          <div class="column is-4">
            <h3 class="is-size-3">
              Schwimmlehrer
            </h3>
            <p class="py-4">
              Schon als ich klein war, liebte ich das Wasser. In Willisau lernte ich dann das Schwimmen und war begeistert. 
              Ich begann einmal in der Woche zu trainieren. Dies reichte mir jedoch nicht und ich trat dem 
              <a class="has-text-black" href="https://www.svsempachersee.ch/">Schwimmverein Sempachersee</a> bei. Bei diesem 
              durfte ich dem Wettkampfteam beitreten und einige Jahre später wurde ich als Schwimmlehrer ausgebildet. Ich liebe 
              diesen Job, da ich mein Wissen weitergeben kann und immer wieder neue und herausfordernde Probleme lösen muss.
            </p>
          </div>

          <div class="column is-4 is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only is-hidden-fullhd-only">
            <!-- whitespace -->
          </div>

          <div class="column is-4 is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only is-hidden-fullhd-only">
            <img src="/assets/img/Jan_Schwimmen.png">
          </div>
          
        </div>

        <!-- Motorrad -->
        <div class="columns is-vcentered">
          <div class="column is-4">
            <h3 class="is-size-3">
              Motorrad
            </h3>

            <p class="py-4">
              Meine grösste Leidenschaft gilt dem Motorradfahren. Dieses einzigartige Hobby habe ich leider erst in den letzten paar Jahren 
              entdeckt, jedoch bin ich seit dieser Entdeckung immer auf dem Motorrad anzutreffen, wenn es das Wetter erlaubt. Da ich meine 
              Yamaha MT-07 wirklich mein Eigen machen wollte, habe ich sie modifiziert und ein wenig umgebaut, so dass sie meinen Wünschen 
              entspricht.
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

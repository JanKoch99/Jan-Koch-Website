import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="is-size-1">
              Vergangenheit
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">

          <!-- Leukemia -->
          <div class="column is-4">
            <h3 class="is-size-3">
              Meine Krankheit
            </h3>

            <p class="py-4">
              An Weihnachten 2004 bekam ich am ganzen Körper blaue Flecken und eine starke Ohrenentzündung. Als wir zum Arzt giengen 
              war es leider nicht nur ein Ausschlag. Nach einer langen untersuchung im Spital wurde festgestellt, dass es sich um 
              <a class="has-text-black" href="https://de.wikipedia.org/wiki/Akute_myeloische_Leuk%C3%A4mie">AML-M2 </a>handelt. Dies ist eine Leukämieart welche meistens bei älteren Menschen auftritt und deutlich gefährlicher ist. 
              Mein Vater hat dazu <a href="https://jankoch.netlify.app/index.htm">diese Website </a> erstellt, 
              bei welcher alles genaustens erklärt wird.
              
            </p>
          </div>

          <div class="column is-4">
            <!-- whitespace -->
          </div>

          <div class="column is-4">
            <img src="/assets/img/Jan_Spital.jpg">
          </div>

        </div>

        <!-- Mountainbiken -->
        <div class="columns is-vcentered">
          <div class="column is-4 is-hidden-mobile">
            <img src="/assets/img/placeholder/placeholder.png">


          </div>

          <div class="column is-4 is-hidden-mobile">
            <!-- whitespace -->
          </div>

          <div class="column is-4">
            <h3 class="is-size-3">
              Mountainbiken
            </h3>
            <p class="py-4">
              Meine grösste Leidenschaft als kleiner Junge war das Biken. Mein Vater hat es mir schon als kleiner Junge 
              beigebracht und wir machten immer wieder kleinere Ausflüge mit dem Bike. Nach ein paar Jahren wurde es immer 
              kompetitiver und ich trat dem <a class="has-text-black" href="https://www.vc-schoetz.ch/">Veloclub Schötz</a> 
              bei. Dort begann ich mit den sogenannten "<em>Mittwochabendrennen</em>", bei denen man am Mittwochabend ein Rennen 
              hatte, welches nicht viel länger als eine Stunde ging. Leider verliess mich die Motivation nach ein paar Jahren 
              und ich konzentrierte mich mehr auf das Schwimmen.
            </p>
          </div>

          <div class="column is-4 is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only is-hidden-fullhd-only">
            <!-- whitespace -->
          </div>

          <div class="column is-4 is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only is-hidden-fullhd-only">
            <img src="/assets/img/placeholder/placeholder.png">
          </div>

        </div>

        <!-- Gymnasium -->
        <div class="columns is-vcentered">
          <div class="column is-4">
            <h3 class="is-size-3">
              Gymnasium
            </h3>

            <p class="py-4">
              Nach der Primarstufe ging ich zuerst 3 Jahre lang in die Sekundarstufe und wechselte danach an das Gymnasium in Sursee. 
              Ich fühlte mich dort jedoch nie richtig wohl, da mir der Stoff, welchen man lernen musste, oft wenig bis gar nicht zugesagt hatte 
              und ich meine Zeit lieber dem Sport als dem lernen gewidmet habe. Zudem fehlte ich oft, da ich krank war oder im Spital 
              Nachuntersuchungen hatte. Für mich war das interessanteste am Gymnasium die Maturaarbeit. Dort erstellte ich 
              eine Website welche <a class="has-text-black" href="https://jankoch99.wixsite.com/matura">das Brustschwimmen</a> näherbringen soll 
              und die für die häufigsten Fehler Übungen präsentiert.
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
  ]
})
export class PastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

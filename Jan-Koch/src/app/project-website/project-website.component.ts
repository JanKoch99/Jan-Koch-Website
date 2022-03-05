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
                    Zuerst dachte ich, dass ich die Website <a href="https://jankoch.netlify.app/index.htm" class="has-text-black">meines Vaters</a> nachbauen möchte, jedoch einfach ein bisschen moderner 
                    und mit mehr features. Diese Idee habe ich jedoch nach kurzer Zeit verworfen, da dies nicht mein aktuelles Leben wiederspiegeln und mich 
                    in diesem Projekt einschränken würde.
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
                      Bei der Formatierung arbeite ich mit dem Framework <a href="" class="has-text-black">Bulma</a>, da es ein sehr 
                      einfaches und intuitives Framework ist.
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

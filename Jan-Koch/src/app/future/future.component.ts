import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="is-size-1">
              Die Zukunft wird gerade jetzt geschrieben!
            </h1>
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column is-4"></div>
          <div class="column is-4">
            <progress class="progress is-medium is-dark" max="100" ></progress>
          </div>
          <div class="column is-4"></div>
        </div>
      </div>
    </section>

    
  `,
  styles: [
  ]
})
export class FutureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

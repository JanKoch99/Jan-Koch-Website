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

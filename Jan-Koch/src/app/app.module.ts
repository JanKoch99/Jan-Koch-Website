import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import { FutureComponent } from './future/future.component';
import { PresenceComponent } from './presence/presence.component';
import { PastComponent } from './past/past.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FutureComponent,
    PresenceComponent,
    PastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

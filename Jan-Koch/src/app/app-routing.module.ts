import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {FutureComponent} from "./future/future.component";
import {PresenceComponent} from "./presence/presence.component";
import {PastComponent} from "./past/past.component";
import {ProjectWebsiteComponent} from "./project-website/project-website.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full',
  }, {
  path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m=>m.UsersModule),
  },
  {
    path: 'future',
    component: FutureComponent
  },
  {
    path: 'presence',
    component: PresenceComponent
  },
  {
    path: 'past',
    component: PastComponent
  },
  {
    path: 'project-website',
    component: ProjectWebsiteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowRouteComponent } from './show-route/show-route.component';

const routes: Routes = [
  { path: '', component: ShowRouteComponent },
  { path: 'deep/link', component: ShowRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

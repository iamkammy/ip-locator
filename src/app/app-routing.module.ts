import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MylocationComponent } from './components/mylocation/mylocation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'mylocation', component:MylocationComponent},
  {path: '**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

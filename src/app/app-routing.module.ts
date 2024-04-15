import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'auth' , loadChildren:() => import('./pages/authorisation/authorisation.module').then(m =>m.AuthorisationModule)},
  // auth  have 3 pages in hes self it is register , sing-in and update write corect routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

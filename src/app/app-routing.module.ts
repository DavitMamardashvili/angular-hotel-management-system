import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'hotel-info/:id', loadChildren: () => import('./pages/hotelinfo/hotelinfo.module').then(m => m.HotelinfoModule) }, 
  { path: 'auth', loadChildren: () => import('./pages/authorisation/authorisation.module').then(m => m.AuthorisationModule) },
  { path: '**', redirectTo: 'not-found' }, 
  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

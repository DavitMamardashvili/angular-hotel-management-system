import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirects empty path to 'home'
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, // Lazy loads the Home module when '/home' is accessed

  { path: '**', redirectTo: 'not-found' }, // Redirects any unknown routes to 'not-found'
  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }, // Lazy loads the NotFound module when '/not-found' is accessed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

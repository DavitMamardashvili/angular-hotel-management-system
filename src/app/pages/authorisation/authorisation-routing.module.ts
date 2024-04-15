import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { SingInComponent } from './authorisation/pages/sing-in/sing-in.component';
import { RegisterComponent } from './authorisation/pages/register/register.component';
import { UpdateComponent } from './authorisation/pages/update/update.component';

const routes: Routes = [
  {
    path: '', component: AuthorisationComponent,
     children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SingInComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'update', component: UpdateComponent }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthorisationRoutingModule { }

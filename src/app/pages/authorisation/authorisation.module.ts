import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { SingInComponent } from './authorisation/pages/sing-in/sing-in.component';
import { RegisterComponent } from './authorisation/pages/register/register.component';
import { UpdateComponent } from './authorisation/pages/update/update.component';
import { AuthorisationRoutingModule } from './authorisation-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule for input fields
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule for form fields
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for buttons
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule for icons
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';

const materialElements = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    AuthorisationComponent,
    SingInComponent,
    RegisterComponent,
    UpdateComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    AuthorisationRoutingModule,
    FormsModule,
    ...materialElements,
    TranslateModule
  ]
})
export class AuthorisationModule { }

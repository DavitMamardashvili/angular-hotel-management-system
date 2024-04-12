import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hotel-management-system';

  constructor(private translateService: TranslateService, private fireAuth: AngularFireAuth) {
    this.translateService.setDefaultLang('eng');
    this.translateService.use(localStorage.getItem('lang') || 'eng')

  }

}

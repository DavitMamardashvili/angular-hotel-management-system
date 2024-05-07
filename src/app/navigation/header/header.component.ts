import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  lang: string = '';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'eng';
  }

  imageUrl: string =
    'https://cdn.iconscout.com/icon/free/png-256/free-airbnb-4-432491.png?f=webp';

  changeValue(selectedLanguage: string) {
    localStorage.setItem('lang', selectedLanguage);
    this.translateService.use(selectedLanguage);
    this.lang = selectedLanguage; // Update the current language
  }
}

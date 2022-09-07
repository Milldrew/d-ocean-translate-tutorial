import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    translate.use('en');
    translate.stream('welcomeMessage').subscribe(console.log);
    translate.get('welcomeMessage').subscribe(console.log);
  }
  ngAfterContentInit() {
    this.translate.use('de');
  }
}

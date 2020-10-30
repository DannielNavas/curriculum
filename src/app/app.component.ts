import { Component } from '@angular/core';
import { faPhone, faMailBulk, faCity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hv';
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faCity = faCity;
}

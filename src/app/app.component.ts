import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  image = {'src':'assets/img/banner.jpg',
  'alt':'Santillana',
  'title':'Santillana',
  'class':'img-fluid d-none d-sm-flex'};

  title = 'ang-sass';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestTabMaterild';

  links = ['/Test1', '/Test2', '/Test3'];
  titles = ['Tab 1', 'Tab 2', 'Tab 3'];
  activeLink = this.links[1];
  myColor = 'primary';
}

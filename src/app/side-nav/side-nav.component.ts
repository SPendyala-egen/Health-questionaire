import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  navList= [
    {
      key: 'health-assistant',
      value: 'Health Assistant'
    },
    {
      key: 'about',
      value: 'About'
    }
  ]
}

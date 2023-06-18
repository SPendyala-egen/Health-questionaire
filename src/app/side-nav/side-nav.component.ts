import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  @Input() isNavOpened = false;
  
  navList= [
    {
      key: 'dashboard',
      value: 'Dashboard',
      icon: 'grid_view'
    },
    {
      key: 'health-assistant',
      value: 'Health Assistant',
      icon: 'assistant'
    },
    {
      key: 'about',
      value: 'About',
      icon: 'info'
    }
  ]
}

import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateIPAddress } from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Health-questionaire';

  isNavOpened = false;

  constructor(private store: Store) {
    this.store.dispatch(new UpdateIPAddress())
  }
}

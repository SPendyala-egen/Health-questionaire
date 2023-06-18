import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GetQuestionResponse } from '../state/app.actions';

@Component({
  selector: 'app-health-assistant',
  templateUrl: './health-assistant.component.html',
  styleUrls: ['./health-assistant.component.scss']
})
export class HealthAssistantComponent {

  chatControl: FormControl = new FormControl('');

  constructor(private store: Store) {}

  onSend() {
    this.store.dispatch(new GetQuestionResponse(this.chatControl.value.trim()));
    this.chatControl.reset();
  }
}

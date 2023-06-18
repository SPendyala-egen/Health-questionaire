import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { GetQuestionResponse } from '../state/app.actions';
import { QuestionnaireState } from '../state/app.state';
import { Observable } from 'rxjs';
import { ChatModel } from '../state/app.models';

@Component({
  selector: 'app-health-assistant',
  templateUrl: './health-assistant.component.html',
  styleUrls: ['./health-assistant.component.scss']
})
export class HealthAssistantComponent {

  chatControl: FormControl = new FormControl('');

  @Select(QuestionnaireState.chatDetails)
  chat$!: Observable<ChatModel[]>;

  constructor(private store: Store) {}

  onSend() {
    this.store.dispatch(new GetQuestionResponse(this.chatControl.value.trim()));
    this.chatControl.reset();
  }
}

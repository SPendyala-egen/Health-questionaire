import { Component, Input } from '@angular/core';
import { ChatModel } from 'src/app/state/app.models';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent {

  @Input() data: ChatModel | null = null
}

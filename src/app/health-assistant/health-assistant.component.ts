import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-health-assistant',
  templateUrl: './health-assistant.component.html',
  styleUrls: ['./health-assistant.component.scss']
})
export class HealthAssistantComponent {

  chatControl: FormControl = new FormControl('');
}

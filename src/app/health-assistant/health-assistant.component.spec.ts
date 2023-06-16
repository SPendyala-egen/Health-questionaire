import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAssistantComponent } from './health-assistant.component';

describe('HealthAssistantComponent', () => {
  let component: HealthAssistantComponent;
  let fixture: ComponentFixture<HealthAssistantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthAssistantComponent]
    });
    fixture = TestBed.createComponent(HealthAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

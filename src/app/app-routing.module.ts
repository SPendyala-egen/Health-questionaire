import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HealthAssistantComponent } from './health-assistant/health-assistant.component';

const routes: Routes = [
  { path: '', redirectTo: 'health-assistant' },
  { path: 'about', component: AboutComponent },
  { path: 'health-assistant', component: HealthAssistantComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

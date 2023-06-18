import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  getIPAddress() {
    return this.http.get<{ip: string}>("http://api.ipify.org/?format=json");
  }

  getQuestionResponse(text: string) {
    return of('Response')
  }
}

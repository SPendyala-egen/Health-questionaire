import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ResponseGptModel } from '../state/app.models';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  getIPAddress() {
    return this.http.get<{ip: string}>("http://api.ipify.org/?format=json");
  }

  getQuestionResponse(text: string, ip: string) {
    return this.http.post<ResponseGptModel>("http://127.0.0.1:8080/chat", {message: text, ipAddress: ip});
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  uri = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  generateCard(data){
    try {
      return this.http.post(`${this.uri}/generate-card`, data )
    } catch (error) {
      console.log('login.service.userSignIn Error : ', error)
    }
    
  }
}

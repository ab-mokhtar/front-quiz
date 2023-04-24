import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoiceServiceService {
  private quizApiUrl = 'http://localhost:9080'; // Externalisation de l'URL de l'API

  constructor(private http: HttpClient) { }
  AddChoice(choice: object,qstId:number): Observable<object> {
    return this.http.post<object>(this.quizApiUrl+'/addChoice/'+qstId, choice);
  }
}

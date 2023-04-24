import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private quizApiUrl = 'http://localhost:9080'; // Externalisation de l'URL de l'API

  constructor(private http: HttpClient) { }
  getAllQuestions(): Observable<object[]> { // Utilisation du type Quiz[] pour le retour de la méthode
    return this.http.get<object[]>(this.quizApiUrl+'/allquestions');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../Models/Quiz';


@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
 

  private quizApiUrl = 'http://localhost:9080/quiz'; // Externalisation de l'URL de l'API

  constructor(private http: HttpClient) { }

  getAllQuizes(): Observable<Quiz> { // Utilisation du type Quiz[] pour le retour de la méthode
    return this.http.get<Quiz>(`${this.quizApiUrl}/1`);
  }
  AddQuiz(quiz: object): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.quizApiUrl}/addQuiz`, quiz);
  }
 
  getAllQuizess(): Observable<object[]> { // Utilisation du type Quiz[] pour le retour de la méthode
    return this.http.get<object[]>(`${this.quizApiUrl}/allquiz`);
  }
  updateQuiz(quizid:number,questionId:number):Observable<Quiz> { // Utilisation du type Quiz[] pour le retour de la méthode
    return this.http.put<Quiz>(this.quizApiUrl+'/addQuestion/'+questionId+'/'+quizid,null);
  }
}

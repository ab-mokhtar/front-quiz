import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizSubmission } from '../Models/QuizSubmission';

@Injectable({
  providedIn: 'root'
})
export class QuizSubmissionService {

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer l'objet QuizSubmission au serveur
  submitQuiz(quizSubmission: object): Observable<QuizSubmission> {
    const url = 'http://localhost:9080/quiz-submissions/'; // Remplacer par l'URL correcte de votre API pour soumettre le quiz
    return this.http.post<QuizSubmission>(url, quizSubmission);
  }

  // Méthodes pour effectuer d'autres actions avec les réponses soumises
  // ...

}
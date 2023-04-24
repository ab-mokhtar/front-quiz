import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluateurService {

  private quizApiUrl = 'http://localhost:9080'; // Externalisation de l'URL de l'API

  constructor(private http: HttpClient) { }
  getAllEvaluateurs(): Observable<object[]> { 
    return this.http.get<object[]>(this.quizApiUrl+'/Evaluateurs');
  }
  getAllEvaluateursDispo(date:Date): Observable<object[]> { 
    return this.http.get<object[]>(this.quizApiUrl+'/EvaluateursDispo/'+date);
  }
  getAllEvaluateursNonDispo(date:Date): Observable<object[]> { 
    return this.http.get<object[]>(this.quizApiUrl+'/EvaluateursNonDispo/'+date);
  }
  getAllCandidats(id:number): Observable<object[]> { 
    return this.http.delete<object[]>(this.quizApiUrl+'/Evaluateurs/'+id);
  }
}

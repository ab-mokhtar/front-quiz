import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  supprimerAffectation(id: number):Observable<object> {
    return this.http.delete<object>(this.quizApiUrl+'/Affectations/'+id);
  }

  private quizApiUrl = 'http://localhost:9080'; // Externalisation de l'URL de l'API

  constructor(private http: HttpClient) { }
  Affecter(affect: object): Observable<object> {
    return this.http.post<object>(this.quizApiUrl+'/Affectations', affect);
  }
  getAllAffectations(): Observable<object[]> { 
    return this.http.get<object[]>(this.quizApiUrl+'/Affectations');
  }
}

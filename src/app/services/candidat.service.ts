import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private quizApiUrl = 'http://localhost:9080'; // Externalisation de l'URL de l'API

  constructor(private http: HttpClient) { }

  getAllCandidats(): Observable<object[]> { // Utilisation du type Quiz[] pour le retour de la méthode
    return this.http.get<object[]>(this.quizApiUrl+'/candidats');
  }

}

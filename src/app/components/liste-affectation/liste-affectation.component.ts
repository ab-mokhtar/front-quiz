import { Component, OnInit } from '@angular/core';
import { AffectationService } from 'src/app/services/affectation.service';

@Component({
  selector: 'app-liste-affectation',
  templateUrl: './liste-affectation.component.html',
  styleUrls: ['./liste-affectation.component.css']
})
export class ListeAffectationComponent implements OnInit {
  affectations!:any[]
  constructor(
    // Injecter le service CandidatService
    private affectationservice:AffectationService
  ) { }

  ngOnInit(): void {
    // Appeler la méthode pour récupérer les candidats
    
    this.affectationservice.getAllAffectations().subscribe((response) => {
      this.affectations = response;
    });
  }
  // Fonction pour supprimer une affectation
  supprimerAffectation(id: number): void {
    // Appeler le service pour supprimer l'affectation en utilisant son identifiant
    this.affectationservice.supprimerAffectation(id).subscribe(() => {
      // Actualiser la liste des affectations après la suppression
      this.affectations = this.affectations.filter(affectation => affectation.id !== id);
    });
  }

}

import { Component } from '@angular/core';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-liste-evaluation',
  templateUrl: './liste-evaluation.component.html',
  styleUrls: ['./liste-evaluation.component.css']
})
export class ListeEvaluationComponent {
  Evaluations!:any[]
  constructor(
    // Injecter le service CandidatService
    private evaluationService:EvaluationService
  ) { }

  ngOnInit(): void {
    // Appeler la méthode pour récupérer les candidats
    
    this.evaluationService.getAllEvaluation().subscribe((response) => {
      this.Evaluations = response;
    });
  }
  // Fonction pour supprimer une affectation
  supprimerAffectation(id: number): void {
    // Appeler le service pour supprimer l'affectation en utilisant son identifiant
    this.evaluationService.supprimerEvaluation(id).subscribe(() => {
      // Actualiser la liste des affectations après la suppression
      this.Evaluations = this.Evaluations.filter(evaluation => evaluation.id !== id);
    });
  }

}

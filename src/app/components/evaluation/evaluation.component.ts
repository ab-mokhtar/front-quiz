import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffectationService } from 'src/app/services/affectation.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { EvaluateurService } from 'src/app/services/evaluateur.service';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  evaluateurs!: any[];
  candidats!: any[]; // Ajouter la liste des candidats
  candidatSelection!:any
  EvaluateurSelection!:any
  score!:number
  constructor(
    private evaluateurService: EvaluateurService,
    private candidatService: CandidatService ,// Injecter le service CandidatService
    private affectationservice:AffectationService,
    private router: Router,
    private evalutionservice:EvaluationService
  ) { }
  ngOnInit(): void {
    this.candidatService.getAllCandidats().subscribe((response) => {
      this.candidats = response;
    });
    this.evaluateurService.getAllEvaluateurs().subscribe((response) => {
      this.evaluateurs = response;
    });  }
    Evaluer(evaluateur:any, candidatId:any,score:any) {
      // Logique d'affectation de l'évaluateur au candidat pour la date sélectionnée
      console.log('Évaluateur:', evaluateur);
      console.log('Candidat ID:', candidatId);
      // Appeler les méthodes appropriées du service pour effectuer l'affectation (à implémenter)
      const obj:object={
        candidat:{"id":candidatId},
        evaluateur:{"id":evaluateur},
        score_entretien:score
      }
      this.evalutionservice.AddEvaluation(obj).subscribe(
        (response) => {
          console.log('Evaluation Ajouté avec succée :');
          this.router.navigate(["AllEval"])
        },
        (error) => {
          console.error('Erreur lors de la récupération des évaluateurs non disponibles :', error);
        }
      );
    }
}

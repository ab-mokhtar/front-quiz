import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffectationService } from 'src/app/services/affectation.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { EvaluateurService } from 'src/app/services/evaluateur.service';

@Component({
  selector: 'app-evaluateurs',
  templateUrl: './evaluateurs.component.html',
  styleUrls: ['./evaluateurs.component.css']
})


export class EvaluateursComponent implements OnInit {
  dateSelection!: Date;
  evaluateursDispo!: any[];
  evaluateursNonDispo!: any[];
  candidats!: any[]; // Ajouter la liste des candidats
  candidatSelection!:any

  constructor(
    private evaluateurService: EvaluateurService,
    private candidatService: CandidatService ,// Injecter le service CandidatService
    private affectationservice:AffectationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Appeler la méthode pour récupérer les candidats
    this.candidatService.getAllCandidats().subscribe((response) => {
      this.candidats = response;
    });
  }

  submitForm() {
    const date = this.dateSelection;
    // Appeler les méthodes appropriées du service pour récupérer les évaluateurs disponibles et non disponibles
    this.evaluateurService.getAllEvaluateursDispo(date)
      .subscribe(
        (response) => {
          this.evaluateursDispo = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération des évaluateurs disponibles :', error);
        }
      );
    this.evaluateurService.getAllEvaluateursNonDispo(date)
      .subscribe(
        (response) => {
          this.evaluateursNonDispo = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération des évaluateurs non disponibles :', error);
        }
      );
  }

  affecterEvaluateur(evaluateur:any, candidatId:any) {
    // Logique d'affectation de l'évaluateur au candidat pour la date sélectionnée
    console.log('Évaluateur:', evaluateur);
    console.log('Candidat ID:', candidatId);
    // Appeler les méthodes appropriées du service pour effectuer l'affectation (à implémenter)
    const obj:object={
      candidat:{"id":candidatId},
      evaluateur:{"id":evaluateur.id},
      date:this.dateSelection
    }
    this.affectationservice.Affecter(obj).subscribe(
      (response) => {
        console.log('Evaluateur Affecté avec succée :');
        this.router.navigate(["Allaffect"])
      },
      (error) => {
        console.error('Erreur lors de la récupération des évaluateurs non disponibles :', error);
      }
    );
  }

}

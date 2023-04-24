import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { Choice } from 'src/app/Models/Choice';
import { Question } from 'src/app/Models/Question';
import { Quiz } from 'src/app/Models/Quiz';
import { QuizSubmission } from 'src/app/Models/QuizSubmission';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import { QuizSubmissionService } from 'src/app/services/quiz-submission.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz!: Quiz ; // Utilisation du modèle Quiz pour le type de données
   // Initialisation de la longueur à 0
  selectedChoices: number[] = []; // Tableau pour stocker les réponses sélectionnées
  answers:Answer[]=[];
  questions:Question[]=[];
  constructor(private quizservice: QuizServiceService,private quizSubmissionService: QuizSubmissionService) { }

  ngOnInit(): void {
    this.listQuiz();
  }

   listQuiz() {
    this.quizservice.getAllQuizes().subscribe(
      data => {
        this.quiz = data;
         // Mise à jour de la longueur du tableau
      },
      error => {
        console.error('Erreur lors de la récupération des quiz :', error);
      }
    );
  }

  submitQuiz(): void {
    const quizSubmission: QuizSubmission = {
      candidat: {
        "id": 1,
        "nom": "chalbi",
        "prenom": "firas",
        "tel": "123456789",
        "email": "john.doe@example.com",
        "imagePath": "/candidats-photos/candidat-1.jpg",
        "dateNais": "1990-01-01"
      },
      quiz: {"id":this.quiz.id,
      "description":this.quiz.description,
      "title":this.quiz.title,
      "questions":[]},
      answers: [],
      
    };
    

    for (let i = 0; i < this.selectedChoices.length; i++) {
      if(this.selectedChoices[i]!=undefined){
      const answer: object = {
        "choice": {"id":this.selectedChoices[i],}
        
      };
      quizSubmission.answers.push(answer);
    }}


   
  console.log(quizSubmission)
      // Appeler le service QuizSubmissionService pour soumettre le quiz
      this.quizSubmissionService.submitQuiz(quizSubmission).subscribe(result => {
        console.log('Quiz soumis avec succès :', result);
        // Réinitialiser les choix sélectionnés après soumission
        this.selectedChoices = [];
      }, error => {
        console.error('Erreur lors de la soumission du quiz :', error);
      });
    }
  } 


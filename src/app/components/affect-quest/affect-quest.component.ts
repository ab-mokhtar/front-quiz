import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-affect-quest',
  templateUrl: './affect-quest.component.html',
  styleUrls: ['./affect-quest.component.css']
})
export class AffectQuestComponent implements OnInit {
  questions!: any[]; // Tableau pour stocker les questions récupérées depuis le service
  quizzes!: any[]; // Tableau pour stocker les quizzes récupérés depuis le service
  selectedQuestion: any;
  selectedQuiz: any;

  constructor(private quizService: QuizServiceService,private questionservice:QuestionsService) { }

  ngOnInit() {
    // Récupérer les questions depuis le service
    this.questionservice.getAllQuestions().subscribe(data => {
      this.questions = data;
    });

    // Récupérer les quizzes depuis le service
    this.quizService.getAllQuizess().subscribe(data => {
      this.quizzes = data;
    });
  }
  onSubmit() {
    // Vérifier si les valeurs sont sélectionnées dans les listes déroulantes
    if (this.selectedQuestion && this.selectedQuiz) {
      console.log(this.selectedQuestion,this.selectedQuiz)
      // Appeler le service de mise à jour du quiz avec les valeurs sélectionnées
      this.quizService.updateQuiz(this.selectedQuiz,this.selectedQuestion).subscribe(data => {
        // Traitement après la mise à jour du quiz, si nécessaire
      });
    }
  }
}
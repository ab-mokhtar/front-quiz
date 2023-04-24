import { Component, OnInit } from '@angular/core';
import { ChoiceServiceService } from 'src/app/services/choice-service.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  questions!: any[]; // Tableau pour stocker les questions récupérées depuis le service
  newchoicetext : any;
  selectedQuestion: any;
  correct: any;

  constructor(private quizService: QuizServiceService, private choiceservice:ChoiceServiceService,private questionservice:QuestionsService) { }

  ngOnInit() {
    // Récupérer les questions depuis le service
    this.questionservice.getAllQuestions().subscribe(data => {
      this.questions = data;
    });

  }
  onSubmit() {
    // Vérifier si les valeurs sont sélectionnées dans les listes déroulantes
    if (this.selectedQuestion && this.newchoicetext) {
      console.log(this.selectedQuestion,this.correct)
      const choice:Object={
        "value":this.newchoicetext,
        "correct":this.correct
      }
      // Appeler le service de mise à jour du quiz avec les valeurs sélectionnées
      this.choiceservice.AddChoice(choice,this.selectedQuestion).subscribe(data => {
        // Traitement après la mise à jour du quiz, si nécessaire
      });
    }
  }
}
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Quiz } from 'src/app/Models/Quiz';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent {
  quizForm!: FormGroup;
  questionsSUb:Object[]=[]
  constructor(private formBuilder: FormBuilder,private quizService:QuizServiceService) {
    // Initialisez le formulaire dans le constructeur
    this.quizForm = this.formBuilder.group({
      // ... définissez les contrôles de formulaire et leurs validateurs ...
    });
  }

  ngOnInit(): void {
    this.quizForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      questions: this.formBuilder.array([]) // Créez un tableau vide pour les questions

    });
  }
  addQuestion(): void {
    const question = this.formBuilder.group({
      questionText: ['', Validators.required],
      // Ajoutez d'autres contrôles de formulaire pour la question (ex: options de réponse, etc.)
    });
    this.questions.push(question);
  }

  // Méthode pour supprimer une question du formulaire
  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }
  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }
  onSubmit(): void {
    if (this.quizForm.valid) {
      const quizQuestions = this.quizForm.get('questions')?.value;

      // Convertir chaque question en objet JSON
      const questionsArray = [];
      for (const question of quizQuestions) {
        const questionText = question.questionText;
        const questionObj = {
          text: questionText
        };
        questionsArray.push(questionObj);
      }
      // Créer un nouvel objet Quiz avec les valeurs du formulaire
      const quiz: object = {
        name: this.quizForm.value.title,
        description: this.quizForm.value.description,
        questions: questionsArray // Initialisez le tableau de questions avec un tableau vide
      };

      // Envoyer l'objet quiz créé au backend pour le traitement
      // (Exemple : appeler un service pour enregistrer le quiz dans une base de données)
      console.log(quiz);
         // Appeler le service QuizSubmissionService pour soumettre le quiz
         this.quizService.AddQuiz(quiz).subscribe(result => {
          console.log('Quiz soumis avec succès :', result);
          
        }, error => {
          console.error('Erreur lors de la soumission du quiz :', error);
        });
    }
  }
}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AddquizComponent } from './components/addquiz/addquiz.component';
import { AffectQuestComponent } from './components/affect-quest/affect-quest.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { EvaluateursComponent } from './components/evaluateurs/evaluateurs.component';
import { ListeAffectationComponent } from './components/liste-affectation/liste-affectation.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { ListeEvaluationComponent } from './components/liste-evaluation/liste-evaluation.component';





const routes: Routes = [
{path:"admin", component: AllTemplateAdminComponent, children:[
    {path:"home", component: BodyAdminComponent},
  ]
},


{
  path:"user", component:AllTemplateUserComponent, children:[
    {path:"body",component: BodyUserComponent},
    {path:"quiz",component:QuizComponent},
    {path:"AddQuiz",component:AddquizComponent},
    {path:"Addchoice",component:ChoiceComponent},
    {path:"Evaluateur",component:EvaluateursComponent},
    {path:"affect",component:AffectQuestComponent},
    {path:"Allaffect",component:ListeAffectationComponent},
    {path:"AllEval",component:ListeEvaluationComponent},
    {path:"Evaluation",component:EvaluationComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

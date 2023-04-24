import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AddquizComponent } from './components/addquiz/addquiz.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AffectQuestComponent } from './components/affect-quest/affect-quest.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { QuestionComponent } from './components/question/question.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { EvaluateursComponent } from './components/evaluateurs/evaluateurs.component';
import { ListeAffectationComponent } from './components/liste-affectation/liste-affectation.component';
import { ListeEvaluationComponent } from './components/liste-evaluation/liste-evaluation.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    BodyUserComponent,
    HeaderUserComponent,
    FooterUserComponent,
    AllTemplateUserComponent,
    AddquizComponent,
    EvaluationComponent,
    QuizComponent,
    AffectQuestComponent,
    ChoiceComponent,
    QuestionComponent,
    AffectationComponent,
    EvaluateursComponent,
    ListeAffectationComponent,
    ListeEvaluationComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule, 
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:qid', component: QuizComponent},
  {path: ':layout/courses', component: CourseTableComponent},
  {path: ':layout/courses/:courseId', component: CourseViewerComponent},
  {path: ':layout/courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: ':layout/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

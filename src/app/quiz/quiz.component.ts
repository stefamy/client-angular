import { Component, OnInit } from '@angular/core';
import {QuestionServiceClient} from '../services/QuestionServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: QuestionServiceClient,
              private route: ActivatedRoute) { }

  quizId = ''
  quiz = {id: '', title: ''}
  questions = []

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid
      this.service.findQuizById(this.quizId)
      .then( quiz => this.quiz = quiz);
      this.service.findQuestionsForQuiz(this.quizId)
      .then(questions => this.questions = questions);
    });
  }

}

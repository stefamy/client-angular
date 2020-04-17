import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute) {
  }
  quizId = ''
  questions = [];
  quiz = {id: '', title: ''};
  isSubmitted = false;
  courseId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.courseId = params.courseId;
      this.service.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz);
      this.service.findQuestionsForQuiz(this.quizId)
      .then(questions => this.questions = questions);
    });
  }
  submitQuiz = () => {
    this.isSubmitted = true;
    this.service.submitQuiz(this.quizId, this.questions);
  }
}



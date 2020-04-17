import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizzesServiceClient} from '../services/QuizzesServiceClient';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizzesServiceClient,
              private route: ActivatedRoute) {
  }

  courseId = '';
  quizzes = [{
    _id: '',
    questions: [],
    title: '',
    attempts: []
  }];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes).then(() => this.loadQuizAttempts());
    });
  }
  loadQuizAttempts() {
    this.quizzes.forEach(quiz => this.service.findQuizAttempts(quiz._id)
    .then(attempt => quiz.attempts = attempt));
  }

}

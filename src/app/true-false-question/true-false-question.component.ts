import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question
  @Input()
  graded
  result = false;
  @Input()
  answer = 'NA';
  @Output()
  answerChange = new EventEmitter<string>();

  submitAnswer = () => {
    this.result = this.question.correct === this.answer;
    this.graded = true;
  }
  selectAnswer = () => {
    this.answerChange.emit(this.answer);
    this.result = this.question.correct === this.answer;
  }

  ngOnInit(): void {
  }

}

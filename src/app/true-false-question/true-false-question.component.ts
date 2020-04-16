import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', correct: ''};
  graded = false;
  result = false;
  @Input()
  answer = 'NA';
  @Output()
  answerChange = new EventEmitter<string>();

  submitAnswer = () => {
    this.result = this.question.correct === this.answer;
    this.graded = true;
    this.answerChange.emit(this.answer);
  }

  ngOnInit(): void {
  }

}

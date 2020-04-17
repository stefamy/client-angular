import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

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
    this.graded = true;
  }
  selectAnswer = () => {
    this.answerChange.emit(this.answer);
    this.result = this.question.correct === this.answer;
  }

  ngOnInit(): void {
  }

}

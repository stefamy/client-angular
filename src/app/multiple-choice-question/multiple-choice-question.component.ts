import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', answer: '', choices: '', correct: ''};
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

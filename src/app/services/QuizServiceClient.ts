import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findQuizById = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}`)
    .then(response => response.json())
  findQuestionsForQuiz = (qid) =>
    fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
    .then(response => response.json())
  submitQuiz = (qid, questions) => {
    fetch(`http://localhost:3000/api/quizzes/${qid}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions), headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
    .then(result => console.log(result));
  }
}

import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findQuizById = (qid) =>
    fetch(`https://whiteboard-node-server-cs5610.herokuapp.com/api/quizzes/${qid}`)
    .then(response => response.json())
  findQuestionsForQuiz = (qid) =>
    fetch(`https://whiteboard-node-server-cs5610.herokuapp.com/api/quizzes/${qid}/questions`)
    .then(response => response.json())
  submitQuiz = (qid, questions) => {
    fetch(`https://whiteboard-node-server-cs5610.herokuapp.com/api/quizzes/${qid}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions), headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
    .then(result => result);
  }
}

import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`https://whiteboard-node-server-cs5610.herokuapp.com/api/quizzes`)
    .then(response => response.json())
  findQuizAttempts = (qid) =>
    fetch(`https://whiteboard-node-server-cs5610.herokuapp.com/api/quizzes/${qid}/attempts`)
  .then(response => response.json())
}

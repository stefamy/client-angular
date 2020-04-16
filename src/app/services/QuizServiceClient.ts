import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(`https://whiteboard-node-server-cs5610.herokuapp.com/api/quizzes`)
    .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://whiteboard-node-server-cs5610.herokuapp.com/api/quizzes/${qid}`)
    .then(response => response.json())
}

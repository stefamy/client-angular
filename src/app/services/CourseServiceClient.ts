import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/stefamy4405/courses')
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/stefamy4405/courses/${courseId}`)
      .then(response => response.json())
}

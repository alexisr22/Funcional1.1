import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { StudentsComponent } from '../components/students/students.component';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  _url = 'http://localhost:8000/api/students'
  url = 'http://localhost:8000/api/student'

  constructor(
    private http: HttpClient
  ) {
    console.log('Ya esta jalando students')
   }
   getStudents(){
     let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

     return this.http.get(this._url, {
       headers : header
     });
   }

   saveStudent(data:any){
     return this.http.post(this.url,data)
   }

}

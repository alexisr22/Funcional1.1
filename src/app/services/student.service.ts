import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  _url = 'http://localhost:8000/api/students'

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
}

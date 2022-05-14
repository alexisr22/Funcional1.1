import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  _url = 'http://localhost:8000/api/teachers'

  constructor(
    private http: HttpClient
  ) {
    console.log('Ya esta jalando teacher')
   }
   getTeachers(){
     let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

     return this.http.get(this._url, {
       headers : header
     });
   }
}

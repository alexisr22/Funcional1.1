import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  title = 'client';
  public students: Array<any> = []

  constructor(
    private studentService:StudentService
  ) {

    this.studentService.getStudents().subscribe((resp:any) => {
      this.students = resp
    })

   }

   deleteStudent(student:any){
     this.studentService.deleteStudent(student).subscribe((result) =>{
       console.warn("result", result)
     })
   }

  ngOnInit(): void {
  }

}

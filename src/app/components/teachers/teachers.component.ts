import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  title = 'client';
  public teachers: Array<any> = []

  constructor(
    private teacherService:TeacherService
  ) {

    this.teacherService.getTeachers().subscribe((resp:any) => {
      this.teachers = resp
    })

   }

   deleteTeacher(teacher:any){
    this.teacherService.deleteTeacher(teacher).subscribe((result) =>{
      console.warn("result", result)
    })
  }

  ngOnInit(): void {
  }

}

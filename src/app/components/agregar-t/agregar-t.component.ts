import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-agregar-t',
  templateUrl: './agregar-t.component.html',
  styleUrls: ['./agregar-t.component.scss']
})
export class AgregarTComponent implements OnInit {

  teachers : any;
  constructor(
    private teacherService:TeacherService
    ) {
      this.teacherService.getTeachers().subscribe((data) => {
        this.teachers = data;
      })
     }
    getTeacherFormData(data:any)
    {
      console.warn(data)
      this.teacherService.saveTeacher(data).subscribe((result)=>{
        console.warn(result)
      })
    }

  ngOnInit(): void {
  }

}

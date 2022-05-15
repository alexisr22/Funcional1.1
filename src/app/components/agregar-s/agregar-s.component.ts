import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-agregar-s',
  templateUrl: './agregar-s.component.html',
  styleUrls: ['./agregar-s.component.scss']
})
export class AgregarSComponent implements OnInit {

  students : any;
  constructor(
    private studentService:StudentService
  ) {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    })
   }
  getStudentFormData(data:any)
  {
    console.warn(data)
    this.studentService.saveStudent(data).subscribe((result)=>{
      console.warn(result)
    })
  }

  ngOnInit(): void {
  }

}

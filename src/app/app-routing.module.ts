import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AgregarSComponent } from './components/agregar-s/agregar-s.component';
import { AgregarTComponent } from './components/agregar-t/agregar-t.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'teachers',
    component : TeachersComponent
  },
  {
    path : 'students',
    component : StudentsComponent
  },
  {
    path : 'AboutUs',
    component: AboutUsComponent
  },
  {
    path : 'AgregarT',
    component: AgregarTComponent
  },
  {
    path : 'AgregarS',
    component: AgregarSComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

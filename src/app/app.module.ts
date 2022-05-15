import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgregarSComponent } from './components/agregar-s/agregar-s.component';
import { AgregarTComponent } from './components/agregar-t/agregar-t.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeachersComponent,
    StudentsComponent,
    AboutUsComponent,
    AgregarSComponent,
    AgregarTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:MainComponent},
  {path:'add_student', component:CreateStudentComponent},
  {path:'view_student', component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { MainComponent } from './main/main.component';
import { GenerateReceiptComponent } from './generate-receipt/generate-receipt.component';
import { ViewComponent } from './view/view.component';
import { ViewReceiptComponent } from './view-receipt/view-receipt.component';
import { CreateExaminationComponent } from './create-examination/create-examination.component';
import { ViewExaminationComponent } from './view-examination/view-examination.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:MainComponent},
  {path:'add_student', component:CreateStudentComponent},
  {path:'view_student', component:ViewStudentComponent},
  {path:'generate_receipt', component:GenerateReceiptComponent},
  {path:'view', component: ViewComponent},
  {path:'view_receipt', component: ViewReceiptComponent},
  {path:'add_examination', component: CreateExaminationComponent},
  {path:'view_examination', component: ViewExaminationComponent},
  {path:'view_staff', component: ViewStaffComponent},
  {path:'add_staff', component : CreateStaffComponent},
  {path:'student_attendance',component:StudentAttendanceComponent},
  {path:'staff_attendance', component:StaffAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

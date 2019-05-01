import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatDialogModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ChartsModule } from 'ng2-charts';
import { AdmissionsComponent } from './admissions/admissions.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { GenerateReceiptComponent } from './generate-receipt/generate-receipt.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { WordsPipe } from './words.pipe';
import { PrintComponent } from './print/print.component';
import { ViewReceiptComponent } from './view-receipt/view-receipt.component';
import { PayDialogComponent } from './pay-dialog/pay-dialog.component'
import { MyInterceptor } from './interceptor/http-interceptor';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MessageSnackbarComponent } from './message-snackbar/message-snackbar.component';
import { CreateExaminationComponent } from './create-examination/create-examination.component';
import { ViewExaminationComponent } from './view-examination/view-examination.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    SidenavComponent,
    AttendanceComponent,
    AdmissionsComponent,
    CreateStudentComponent,
    ViewStudentComponent,
    GenerateReceiptComponent,
    ViewComponent,
    WordsPipe,
    PrintComponent,
    ViewReceiptComponent,
    PayDialogComponent,
    ErrorDialogComponent,
    MessageSnackbarComponent,
    CreateExaminationComponent,
    ViewExaminationComponent,
    ViewStaffComponent,
    CreateStaffComponent,
    StudentAttendanceComponent,
    StaffAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    ChartsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatExpansionModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents:[ PayDialogComponent,ErrorDialogComponent ],
  providers: [{provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

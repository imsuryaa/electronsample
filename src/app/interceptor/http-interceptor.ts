import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(public dialog : MatDialog) { }
  //function which will be called for all http calls
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
          catchError((error: HttpErrorResponse) => {
              let data = {};
              let parser = new DOMParser()
              let parsedHtml = parser.parseFromString(error.error, 'text/html');
              let er = parsedHtml.getElementsByTagName('pre')[0].innerText
              console.log( typeof er)
              data = {
                  reason: er,
                  status: error.status
              };
              console.log(data)
              this.openDialog(er)
              return throwError(error);
          }));
    }

    openDialog(reason): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '400px', data: { action : 'delete', reason : reason},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

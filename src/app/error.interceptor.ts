import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private dialog: MatDialog
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      const errorMessage = error.error.message || "An unknown error occurred!";
      this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
      return throwError(error);
    }));
  }
}

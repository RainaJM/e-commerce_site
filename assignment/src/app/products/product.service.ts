import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { HttpService } from "../shared/Services/http.service";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpService: HttpService) {}
  getList(url: any): Observable<any> {
    return (
      this.httpService
        .get(url)
        // .pipe(catchError(this.handleError));
        .pipe(
          map((response) => response),
          catchError(this.handleError)
        )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    if (error && error.error) {
      return throwError(error.error);
    } else {
      return throwError("Something bad happened ,try agian.");
    }
  }
}

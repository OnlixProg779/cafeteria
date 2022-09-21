import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';

const API_URL = environment.apiURL + '/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategories(
    params: HttpParams
     ): Observable<any> {
   
      var headers;
  
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

    return this.http
      .get<any>(API_URL , {
        headers: headers,
        observe: 'response' as 'body',
        responseType: 'json',
        params,
      })
      .pipe(
      tap((resp) => {
        if(resp.status == 200){

            // Codigo para ejecutar
        }       
      }), 
      catchError(this.handleError)
    ); 
    
  }





    // ERROR
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('(Handle Error en client.service) An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status} ${error.statusText}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }
}

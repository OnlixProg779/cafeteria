import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
      var eTag;
  
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
     //   this.eTag = JSON.parse(resp.headers.get("ETag"));
    //    localStorage.setItem('If-None-Match-get-guides', this.eTag); 
        }       
      }), 
      catchError(this.handleError)
    ); 
    
  }
}

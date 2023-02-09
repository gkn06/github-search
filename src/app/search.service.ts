import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private GITHUB_USER_URL = 'https://api.github.com/users'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getUser(user: string) {
    return this.http.get(`${this.GITHUB_USER_URL}/${user}`).pipe(
      tap((x) => console.log(x)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

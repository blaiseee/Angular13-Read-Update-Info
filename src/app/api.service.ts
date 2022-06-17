import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/contacts";

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse)
  {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent)
    {
      //Client-side Errors
      errorMessage = 'Error: ${error.error.message}';
    }

    else
    {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }

    window.alert(errorMessage);
    return throwError(() => (errorMessage));
  }

  public getData()
  {
    //Ad safe, URL encoded_page parameter
    const options = 
    { params: new HttpParams
      ({
        fromString: "_page=1&_limit=50" //Added page limit to 50
      })
    };
    return this.httpClient.get<any>(this.SERVER_URL, options).pipe(retry(3), catchError(this.handleError));
  }

  public postData(data: any)
  {
    return this.httpClient.post<any>(this.SERVER_URL, data);
  }
}

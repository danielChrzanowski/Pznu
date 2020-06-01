import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZadanieService {

  private baseUrl = "https://localhost:8443";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllZadania`);
  }

}

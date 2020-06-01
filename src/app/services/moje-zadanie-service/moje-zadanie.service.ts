import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MojeZadanie } from 'src/app/models/moje-zadanie/moje-zadanie-model';

@Injectable({
  providedIn: 'root'
})
export class MojeZadanieService {

  private baseUrl = "https://localhost:8443";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllMojeZadania`);
  }

  public addMojeZadanie(zadanie: MojeZadanie): Observable<any> {
    return this.http.post(`${this.baseUrl}/addMojeZadanie`, zadanie);
  }

}

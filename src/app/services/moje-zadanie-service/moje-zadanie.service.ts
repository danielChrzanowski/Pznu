import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem('token'));
    return this.http.get(`${this.baseUrl}/getAllMojeZadania`, {headers: headers});
  }

  public addMojeZadanie(zadanie: MojeZadanie): Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem('token'));
    return this.http.post(`${this.baseUrl}/addMojeZadanie`, zadanie, {headers: headers});
  }

}

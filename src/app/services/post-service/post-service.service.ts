import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private baseUrl = "https://localhost:8443";

  constructor( private http: HttpClient ) { }

  //Zwróć wszystkie posty
  public getAll() : Observable<any>{
    return this.http.get(`${this.baseUrl}/posts`);
  }

  //Dodaj post
  public createPost(post: any) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + sessionStorage.getItem('token'));
    return this.http.post(`${this.baseUrl}/addPost`, post, { headers: headers });
  }

}

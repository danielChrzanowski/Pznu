import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service/post-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { Post } from 'src/app/models/post-model/post.model';
import { EmployeeAuthGuardService } from 'src/app/_authentication/employee-auth-guard/employee-auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  posts: Array<Post>;

  constructor(
    private postService: PostServiceService,
    private router: Router,
    private authService: EmployeeAuthGuardService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  //Zwróć wszystkie posty
  getAll() {
    this.postService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.posts = data;
        },
        error => console.log(error));
  }

  //Przejdź do dodawania postów
  addPost() {
    this.router.navigate(["/dodajPost"]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}

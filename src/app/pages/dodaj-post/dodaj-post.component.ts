import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post-model/post.model';
import { PostServiceService } from 'src/app/services/post-service/post-service.service';
import { Router } from '@angular/router';
import { UzytkownikServiceService } from 'src/app/services/uzytkownik-service/uzytkownik-service.service';
import { UserSingleton } from 'src/app/models/user-singleton/user-singleton.service';

@Component({
  selector: 'app-dodaj-post',
  templateUrl: './dodaj-post.component.html',
  styleUrls: ['./dodaj-post.component.scss']
})
export class DodajPostComponent implements OnInit {

  //Dzisiejsza data
  today: Date = new Date();
  year = this.today.getFullYear();
  month = ((this.today.getMonth()+1)<10 ? "0"+(this.today.getMonth()+1) : (this.today.getMonth()+1));
  day = this.today.getDate();

  post: Post = new Post();
  title: string = "";
  content: string = "";
  date: string = this.year+"-"+this.month+"-"+this.day;

  constructor(private postService: PostServiceService, private loggedUserService: UserSingleton , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.post.created = this.date;
    this.post.username = this.loggedUserService.getName();
    this.save();
  }

  //Dodaj post
  save(){
    this.postService.createPost(this.post)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
        this.post = new Post();
        this.router.navigate(["/home"]);
  }

}

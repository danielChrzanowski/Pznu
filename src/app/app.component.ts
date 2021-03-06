import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSingleton } from './models/user-singleton/user-singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Paw';

  uzytkownik: UserSingleton;

  constructor(
    private router: Router,
    private loggedUserService: UserSingleton,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    let theme = localStorage.getItem('theme');
    if (theme != null) {
      this.loadTheme(theme);
    }

    this.uzytkownik = this.loggedUserService.getLoggedUser();
    sessionStorage.removeItem('token');
    this.uzytkownik = null;
    this.refreshUser();
  }

  loadTheme(cssFile: string) {
    const headEl = this.document.getElementsByTagName('head')[0];
    const newLinkEl = this.document.createElement('link');
    newLinkEl.rel = 'stylesheet';
    newLinkEl.href = cssFile;

    localStorage.setItem('theme', cssFile);
    headEl.appendChild(newLinkEl);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.uzytkownik = null;
    this.home();
  }

  refreshUser() {
    if (sessionStorage.length > 0) {
      this.uzytkownik = this.loggedUserService.getLoggedUser();
    }
  }

  home() {
    this.router.navigate(["/home"]);
  }

  kontakt() {
    this.router.navigate(["/kontakt"]);
  }

  zadaniaStudentow() {
    this.router.navigate(["/showZadania"]);
  }

  logIn() {
    this.router.navigate(["/log-in"]);
  }

  dodajPost() {
    this.router.navigate(["/dodajPost"]);
  }

  createUser() {
    this.router.navigate(["/createUser"]);
  }

  zadania() {
    this.router.navigate(["/zadania"]);
  }

  stackblitz() {
    this.router.navigate(["/stackblitz"]);
  }

  mojeZadania() {
    this.router.navigate(["/mojeZadania"]);
  }

  userInfo() {
    this.router.navigate(["/userInfo"]);
  }

}


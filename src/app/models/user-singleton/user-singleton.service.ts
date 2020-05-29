import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSingleton {
  uzytkownik_id: number;
  imie: string;
  nazwisko: string;
  email: string;
  czy_pracownik: boolean;
  link_github: string;

  getLoggedUser() {
    return this;
  }

  setLoggedUser(uzytkownik_id: number,
    imie: string,
    nazwisko: string,
    email: string,
    czy_pracownik: boolean,
    link_github: string) {

    this.uzytkownik_id = uzytkownik_id;
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.email = email;
    this.czy_pracownik = czy_pracownik;
    this.link_github = link_github;

  }

  getId() {
    return this.uzytkownik_id;
  }

  setUserId(id: number) {
    this.uzytkownik_id = id;
  }

  getCzy_pracownik() {
    return this.czy_pracownik;
  }

}

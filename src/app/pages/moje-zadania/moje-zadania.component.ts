import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MojeZadanie } from 'src/app/models/moje-zadanie/moje-zadanie-model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MojeZadanieService } from 'src/app/services/moje-zadanie-service/moje-zadanie.service';
import { FormControl, Validators } from '@angular/forms';
import { UserSingleton } from 'src/app/models/user-singleton/user-singleton.service';

@Component({
  selector: 'app-moje-zadania',
  templateUrl: './moje-zadania.component.html',
  styleUrls: ['./moje-zadania.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MojeZadaniaComponent implements OnInit {

  @ViewChild('addInput') addInput: ElementRef;

  addFormControl = new FormControl('', [
    Validators.required
  ]);

  zadania: Array<MojeZadanie>;

  columnsToDisplay = ['id', 'link'];
  expandedElement: MojeZadanie | null;

  constructor(private mojeZadanieService: MojeZadanieService, private userSingleton: UserSingleton) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.mojeZadanieService.getAll(this.userSingleton.getId())
      .subscribe(
        data => {
          console.log(data);
          this.zadania = data;
        },
        error => console.log(error));
  }

  add() {
    let mojeZadanie = new MojeZadanie();
    mojeZadanie.id_uzytkownika = this.userSingleton.getId();
    mojeZadanie.link = this.addInput.nativeElement.value;
    mojeZadanie.ocena = "brak oceny";

    console.log(mojeZadanie.id_uzytkownika + " " + mojeZadanie.link);

    this.mojeZadanieService.addMojeZadanie(mojeZadanie)
      .subscribe(data => {
        console.log(data);
        this.addInput.nativeElement.value = "";
        this.getAll();
      }, error => console.log(error));

  }

}

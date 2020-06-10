import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Zadanie } from 'src/app/models/zadanie-model/zadanie-model';
import { ZadanieService } from 'src/app/services/zadanie-service/zadanie.service';

@Component({
  selector: 'app-zadania',
  templateUrl: './zadania.component.html',
  styleUrls: ['./zadania.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ZadaniaComponent implements OnInit {

  zadania: Array<Zadanie>;

  columnsToDisplay = ['tytul', 'data'];
  tableDef: Array<any> = [
    {
      key: 'tytul',
      header: 'Tytuł'
    },    {
      key: 'data',
      header: 'Data'
    }
  ];
  expandedElement: Zadanie | null;

  constructor(private zadanieService: ZadanieService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.zadanieService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.zadania = data;
        },
        error => console.log(error));
  }


}

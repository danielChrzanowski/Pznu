import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { MojeZadanie } from 'src/app/models/moje-zadanie/moje-zadanie-model';
import { UserSingleton } from 'src/app/models/user-singleton/user-singleton.service';
import { MojeZadanieService } from 'src/app/services/moje-zadanie-service/moje-zadanie.service';
import { ModalService } from 'src/app/_modal';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-zadania',
  templateUrl: './show-zadania.component.html',
  styleUrls: ['./show-zadania.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ShowZadaniaComponent implements OnInit {
  @ViewChild('ocenaInput') ocenaInput: ElementRef;

  zadania: Array<MojeZadanie>;
  selectedId;
  selectedTitle;

  ocenFormControl = new FormControl('', [
    Validators.required
  ]);

  columnsToDisplay = ['id', 'tytul', 'link'];
  tableDef: Array<any> = [
    {
      key: 'id',
      header: 'ID'
    }, {
      key: 'tytul',
      header: 'Tytuł'
    }, {
      key: 'link',
      header: 'Link'
    }
  ];
  expandedElement: MojeZadanie | null;

  constructor(
    private mojeZadanieService: MojeZadanieService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.mojeZadanieService.getAllNoId()
      .subscribe(
        data => {
          console.log(data);
          this.zadania = data;
        },
        error => console.log(error));
  }

  openLink(url) {
    console.log("URL: " + url);
    sdk.embedProjectId(
      'stackblitzWindow',
      url.replace('https://stackblitz.com/edit/', ''),
      { height: 800 }
    );
    // window.open(url, "_blank");
  }

  selectLink(id, title) {
    this.selectedId = id;
    this.selectedTitle = title;
    this.openModal('ocenModal');
  }

  ocen() {
    let mojeZadanie = new MojeZadanie();
    mojeZadanie.id = this.selectedId;
    mojeZadanie.ocena = this.ocenaInput.nativeElement.value;

    const getZadanie = this.mojeZadanieService.getZadanieById(this.selectedId).toPromise();
    getZadanie.then(data => {
      mojeZadanie.id_uzytkownika = data.id_uzytkownika;
      mojeZadanie.tytul = data.tytul;
      mojeZadanie.link = data.link;

      console.log("SELECT: " + mojeZadanie.id_uzytkownika + " " + mojeZadanie.tytul + " " + mojeZadanie.link);

      this.mojeZadanieService.addMojeZadanie(mojeZadanie)
        .subscribe(data => {
          console.log(data);
          this.selectedId = null;
          this.selectedTitle = null;
          this.closeModal('ocenModal');
          this.getAll();
        }, error => console.log(error));

    });

  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

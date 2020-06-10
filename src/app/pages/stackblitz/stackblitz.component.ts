import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import sdk from '@stackblitz/sdk';
import { MojeZadanie } from 'src/app/models/moje-zadanie/moje-zadanie-model';
import { UserSingleton } from 'src/app/models/user-singleton/user-singleton.service';
import { MojeZadanieService } from 'src/app/services/moje-zadanie-service/moje-zadanie.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class StackblitzComponent implements OnInit {
  @ViewChild('titleInput') titleInput: ElementRef;
  @ViewChild('linkInput') linkInput: ElementRef;

  titleFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(15)
  ]);

  linkFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]);

  zadania: Array<MojeZadanie>;
  selectedLinkToDelete;
  selectedTitleToDelete;

  columnsToDisplay = ['id', 'tytul', 'link'];
  expandedElement: MojeZadanie | null;

  constructor(
    private mojeZadanieService: MojeZadanieService,
    private userSingleton: UserSingleton,
    private modalService: ModalService,
  ) { }

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
    mojeZadanie.tytul = this.titleInput.nativeElement.value;
    mojeZadanie.link = this.linkInput.nativeElement.value;
    mojeZadanie.ocena = "brak oceny";

    console.log(mojeZadanie.id_uzytkownika + " " + mojeZadanie.link);

    this.mojeZadanieService.addMojeZadanie(mojeZadanie)
      .subscribe(data => {
        console.log(data);
        this.titleInput.nativeElement.value = "";
        this.linkInput.nativeElement.value = "";
        this.getAll();
      }, error => console.log(error));

  }

  openLinkInNewTab(url) {
    console.log("URL: " + url);
    window.open(url, "_blank");
  }

  selectLink(id, title) {
    this.selectedLinkToDelete = id;
    this.selectedTitleToDelete = title;
    this.openModal('confirmDeleteModal');
  }

  confirmDeleteModal() {
    this.deleteLink(this.selectedLinkToDelete);
  }

  deleteLink(id: number) {
    this.mojeZadanieService.deleteLink(id)
      .subscribe(data => {
        console.log(data);
        this.selectedLinkToDelete = null;
        this.selectedTitleToDelete = null;
        this.closeModal('confirmDeleteModal');
        this.getAll();
      },
        error => console.log(error));
  }

  helpButtonClick(id: string) {
    console.log("ID: " + id);
    this.openModal(id);
  }



  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

//stackblitz below
const code = `import moment from 'moment';

document.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
`;

const html = `<h1>I was created on <span id='time'></span></h1>`

const projectAngular = {
  files: {
    'main.ts': code,
    'index.html': html,
    'file.ts': 'sdfs'
  },
  title: 'Zadanie',
  description: 'Oto twój nowy projekt',
  template: 'angular-cli',
  tags: ['stackblitz', 'sdk'],
  dependencies: {
    moment: '*'
  }
};

window['nowyProjekt_720'] = () => {
  sdk.embedProject('stackblitzWindow', projectAngular, { height: 720 });
}

window['nowyProjekt_1080'] = () => {
  sdk.embedProject('stackblitzWindow', projectAngular, { height: 1080 });
}

window['zadanie1_720'] = () => {
  sdk.embedGithubProject(
    'stackblitzWindow',
    'danielChrzanowski/PZNU-zadanie1',
    { height: 720 }
  );
}

window['zadanie1_1080'] = () => {
  sdk.embedGithubProject(
    'stackblitzWindow',
    'danielChrzanowski/PZNU-zadanie1',
    { height: 1080, }
  );
}

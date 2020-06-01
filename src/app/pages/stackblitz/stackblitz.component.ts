import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss']
})
export class StackblitzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

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
  description: 'Treść zadania:\n napisz program ktory cos tam',
  template: 'angular-cli',
  tags: ['stackblitz', 'sdk'],
  dependencies: {
    moment: '*'
  }
};

window['embedNewAngular720'] = () => {
  sdk.embedProject('stackblitzWindow', projectAngular, { height: 720 });
}

window['embedNewAngular1080'] = () => {
  sdk.embedProject('stackblitzWindow', projectAngular, { height: 1080 });
}

window['embedGithubProject720'] = () => {
  sdk.embedGithubProject(
    'stackblitzWindow',
    'danielChrzanowski/PZNU-zadanie1',
    { height: 720 }
  );
}

window['embedGithubProject1080'] = () => {
  sdk.embedGithubProject(
    'stackblitzWindow',
    'danielChrzanowski/PZNU-zadanie1',
    { height: 1080, }
  );
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeZadaniaComponent } from './moje-zadania.component';

describe('MojeZadaniaComponent', () => {
  let component: MojeZadaniaComponent;
  let fixture: ComponentFixture<MojeZadaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeZadaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeZadaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

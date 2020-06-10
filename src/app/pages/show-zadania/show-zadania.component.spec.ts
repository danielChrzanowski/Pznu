import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowZadaniaComponent } from './show-zadania.component';

describe('ShowZadaniaComponent', () => {
  let component: ShowZadaniaComponent;
  let fixture: ComponentFixture<ShowZadaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowZadaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowZadaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

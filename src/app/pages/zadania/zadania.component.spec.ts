import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadaniaComponent } from './zadania.component';

describe('RestauramtMenuComponent', () => {
  let component: ZadaniaComponent;
  let fixture: ComponentFixture<ZadaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

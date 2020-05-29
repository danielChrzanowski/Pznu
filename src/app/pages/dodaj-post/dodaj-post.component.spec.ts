import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPostComponent } from './dodaj-post.component';

describe('ClientMakeOrderComponent', () => {
  let component: DodajPostComponent;
  let fixture: ComponentFixture<DodajPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

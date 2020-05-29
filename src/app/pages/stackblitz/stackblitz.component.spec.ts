import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StackblitzComponent } from './stackblitz.component';


describe('ClientOrdersComponent', () => {
  let component: StackblitzComponent;
  let fixture: ComponentFixture<StackblitzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackblitzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackblitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

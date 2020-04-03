import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraInssComponent } from './calculadora-inss.component';

describe('CalculadoraInssComponent', () => {
  let component: CalculadoraInssComponent;
  let fixture: ComponentFixture<CalculadoraInssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraInssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraInssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

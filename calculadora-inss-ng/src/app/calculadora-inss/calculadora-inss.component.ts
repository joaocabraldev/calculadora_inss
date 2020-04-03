import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Resultado } from '../tabela-inss/tabela-inss.service';
import { CalculoInssService } from './calculo-inss.service';

@Component({
  selector: 'app-calculadora-inss',
  templateUrl: './calculadora-inss.component.html',
  styleUrls: ['./calculadora-inss.component.sass']
})
export class CalculadoraInssComponent implements OnInit, AfterViewInit {

  @ViewChild('txtSalario') txtSalario: ElementRef;
  mostraResultado = false;
  salario: number;
  resultado: Resultado = new Resultado();

  constructor(private calculoINSSService: CalculoInssService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.txtSalario.nativeElement.focus();
  }

  calcular(): void {
    if (this.salario) {
      this.calcularINSS();
      this.txtSalario.nativeElement.focus();
      this.txtSalario.nativeElement.select();
    }
  }

  calcularINSS(): void {
    this.calculoINSSService.calcularINSS(this.salario).subscribe((data) => {
      this.resultado = data;
      this.mostraResultado = true;
    });
  }

}

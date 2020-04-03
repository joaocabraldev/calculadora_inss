import { Injectable } from '@angular/core';
import { TabelaInssService, Faixa, Resultado } from '../tabela-inss/tabela-inss.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculoInssService {

  private faixas: Faixa[];

  constructor(private tabelaINSSService: TabelaInssService) { }

  selecionarFaixa(salario: number): Observable<Faixa>  {
    this.tabelaINSSService.getFaixas().subscribe((data) => {
      this.faixas = data;
    });

    let faixaSelecionada: Faixa = this.faixas[3];

    this.faixas.map((faixa) => {
      if (salario >= faixa.vinicial && salario <= faixa.vfinal) {
        faixaSelecionada = faixa;
      }
    });
    return of(faixaSelecionada);
  }

  private calculaAliquotaReal(salario: number, valor: number): number {
    return valor * 100 / salario;
  }

  calcularINSS(salario: number): Observable<Resultado>  {
    const resultado: Resultado = new Resultado();
    let faixaSelecionada: Faixa;

    this.selecionarFaixa(salario).subscribe((data) => {
      faixaSelecionada = data;
    });

    this.faixas.map((faixa) => {
      if (faixa.numero <= faixaSelecionada.numero) {
        let diferenca = 0;

        if (salario > faixa.vfinal && faixa.numero < 5) {
          diferenca = faixa.vfinal - faixa.vinicial;
        } else {
          diferenca = salario - faixa.vinicial;
        }

        resultado.valor += diferenca * faixa.aliquota / 100;

        resultado.salario = salario;
        resultado.aliquota = faixa.aliquota;
        resultado.faixa = faixa.numero;
      }
    });

    return of(resultado);
  }
}

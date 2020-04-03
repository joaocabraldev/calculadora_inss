import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaInssService {

  private FAIXAS: Faixa[] = [{
      vinicial: 0,
      vfinal: 1045.00,
      aliquota: 7.5,
      diferenca: 1045.00,
      maximo: 78.375,
      numero: 1,
    }, {
      vinicial: 1045.01,
      vfinal: 2089.60,
      aliquota: 9,
      diferenca: 1044.59,
      maximo: 94.0131,
      numero: 2,
    }, {
      vinicial: 2089.61,
      vfinal: 3134.40,
      aliquota: 12,
      diferenca: 1044.79,
      maximo: 125.3748,
      numero: 3,
    }, {
      vinicial: 3134.41,
      vfinal: 6101.06,
      aliquota: 14,
      diferenca: 2966.65,
      maximo: 415.331,
      numero: 4,
    },
  ];

  constructor() { }

  getFaixas(): Observable<Faixa[]> {
    return of(this.FAIXAS);
  }

}

export class Resultado {
  salario: number;
  aliquota: number;
  faixa: number;
  valor = 0;
}

export interface Faixa {
  vinicial: number;
  vfinal: number;
  aliquota: number;
  diferenca: number;
  maximo: number;
  numero: number;
}

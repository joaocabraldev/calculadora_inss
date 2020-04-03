import { TestBed } from '@angular/core/testing';

import { Faixa, Resultado } from '../tabela-inss/tabela-inss.service';
import { CalculoInssService } from './calculo-inss.service';

describe('CalculoInssService', () => {
  let service: CalculoInssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoInssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should selecionarFaixa 1', () => {
    const expected = {
      vinicial: 0,
      vfinal: 1045.00,
      aliquota: 7.5,
      diferenca: 1045.00,
      maximo: 78.375,
      numero: 1,
    };

    let actual: Faixa;
    service.selecionarFaixa(1000).subscribe((data) => {
      actual = data;
    });

    expect(expected).toEqual(actual);

  });

  it('should selecionarFaixa 2', () => {
    const expected = {
      vinicial: 1045.01,
      vfinal: 2089.60,
      aliquota: 9,
      diferenca: 1044.59,
      maximo: 94.0131,
      numero: 2,
    };

    let actual: Faixa;
    service.selecionarFaixa(2000).subscribe((data) => {
      actual = data;
    });

    expect(expected).toEqual(actual);
  });

  it('should selecionarFaixa 3', () => {
    let actual: Faixa;
    service.selecionarFaixa(3000).subscribe((data) => {
      actual = data;
    });

    const expected = {
      vinicial: 2089.61,
      vfinal: 3134.40,
      aliquota: 12,
      diferenca: 1044.79,
      maximo: 125.3748,
      numero: 3,
    };

    expect(expected).toEqual(actual);
  });

  it('should selecionarFaixa 4', () => {
    const expected = {
      vinicial: 3134.41,
      vfinal: 6101.06,
      aliquota: 14,
      diferenca: 2966.65,
      maximo: 415.331,
      numero: 4,
    };

    let actual: Faixa;
    service.selecionarFaixa(4000).subscribe((data) => {
      actual = data;
    });

    expect(expected).toEqual(actual);
  });

  it('should selecionarFaixa 4 após limite', () => {
    const expected = {
      vinicial: 3134.41,
      vfinal: 6101.06,
      aliquota: 14,
      diferenca: 2966.65,
      maximo: 415.331,
      numero: 4,
    };

    let actual: Faixa;
    service.selecionarFaixa(7000).subscribe((data) => {
      actual = data;
    });

    expect(expected).toEqual(actual);
  });

  it('should calcularINSS R$1000', () => {
    const expected: Resultado = {
      salario: 1000,
      aliquota: 7.5,
      faixa: 1,
      valor: 75
    };

    let actual: Resultado;
    service.calcularINSS(1000).subscribe((data) => {
      actual = data;
    });

    expect(expected.salario).toEqual(actual.salario);
    expect(expected.aliquota).toEqual(actual.aliquota);
    expect(expected.faixa).toEqual(actual.faixa);
    expect(expected.valor).toEqual(actual.valor);
  });

  it('should calcularINSS R$2000', () => {
    const expected: Resultado = {
      salario: 2000,
      aliquota: 9,
      faixa: 2,
      valor: 164.3241
    };

    let actual: Resultado;
    service.calcularINSS(2000).subscribe((data) => {
      actual = data;
    });

    expect(expected.salario).toEqual(actual.salario);
    expect(expected.aliquota).toEqual(actual.aliquota);
    expect(expected.faixa).toEqual(actual.faixa);
    expect(expected.valor).toEqual(actual.valor);
  });

  it('should calcularINSS R$3000', () => {
    const expected: Resultado = {
      salario: 3000,
      aliquota: 12,
      faixa: 3,
      valor: 281.6349
    };

    let actual: Resultado;
    service.calcularINSS(3000).subscribe((data) => {
      actual = data;
    });

    expect(expected.salario).toEqual(actual.salario);
    expect(expected.aliquota).toEqual(actual.aliquota);
    expect(expected.faixa).toEqual(actual.faixa);
    expect(expected.valor).toEqual(actual.valor);
  });

  it('should calcularINSS R$4000', () => {
    const expected: Resultado = {
      salario: 4000,
      aliquota: 14,
      faixa: 4,
      valor: 418.94550000000004
    };

    let actual: Resultado;
    service.calcularINSS(4000).subscribe((data) => {
      actual = data;
    });

    expect(expected.salario).toEqual(actual.salario);
    expect(expected.aliquota).toEqual(actual.aliquota);
    expect(expected.faixa).toEqual(actual.faixa);
    expect(expected.valor).toEqual(actual.valor);
  });

  it('should calcularINSS R$7000', () => {
    const expected: Resultado = {
      salario: 7000,
      aliquota: 14,
      faixa: 4,
      valor: 713.0939000000001
    };

    let actual: Resultado;
    service.calcularINSS(7000).subscribe((data) => {
      actual = data;
    });

    expect(expected.salario).toEqual(actual.salario);
    expect(expected.aliquota).toEqual(actual.aliquota);
    expect(expected.faixa).toEqual(actual.faixa);
    expect(expected.valor).toEqual(actual.valor);
  });

});

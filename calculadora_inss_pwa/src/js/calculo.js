/**
 * Constante de Cálculos para o sistema.
 */
const calculo = {
  /**
   * Resultados do Sistema.
   * Inclui o salário, alíquota, faixa e o valor.
   */
  resultado: {
    salario: 0,
    aliquota: 0,
    aliquotaReal: 0,
    faixa: 0,
    valor: 0,
  },

  /**
   * Arrrays de Faixas de da Tabela do INSS.
   * faixas[0] corresponde a INSS antigo
   * faixas[1] corresponde a INSS novo
   */
  faixas: [
    [
      {
        vinicial: 0,
        vfinal: 1830.30,
        aliquota: 8,
        numero: 1,
      }, {
        vinicial: 1830.31,
        vfinal: 3050.53,
        aliquota: 9,
        numero: 2,
      }, {
        vinicial: 3050.54,
        vfinal: 6101.06,
        aliquota: 11,
        numero: 3,
      }, {
        vinicial: 6101.07,
        vfinal: 99999999,
        aliquota: 11,
        numero: 4,
      },
    ],
    [
      {
        vinicial: 0,
        vfinal: 1045.00,
        aliquota: 7.5,
        numero: 1,
      }, {
        vinicial: 1045.01,
        vfinal: 2089.60,
        aliquota: 9,
        numero: 2,
      }, {
        vinicial: 2089.61,
        vfinal: 3134.40,
        aliquota: 12,
        numero: 3,
      }, {
        vinicial: 3134.40,
        vfinal: 6101.06,
        aliquota: 14,
        numero: 4,
      },
    ],
  ],

  /**
   * Seleciona a Faixa do INSS conforme salário.
   * @param {number} salario Salário a ser analisado.
   * @return {object} faixa Retorna a Faixa seleciona com base no
   * salário informado.
   */
  selecionaFaixa: (salario) => {
    let faixaSelecionada = 0;

    calculo.faixas[0].forEach((faixa) => {
      if (salario >= faixa.vinicial &&
        salario <= faixa.vfinal) {
        faixaSelecionada = faixa;
      }
    });

    return faixaSelecionada;
  },

  /**
   * Seleciona a Nova Faixa do INSS conforme salário.
   * @param {number} salario Salário a ser analisado.
   * @return {object} faixa Retorna a Faixa seleciona com base no
   * salário informado.
   */
  selecionaFaixaNova: (salario) => {
    let faixaSelecionada = 0;

    calculo.faixas[1].forEach((faixa) => {
      if (salario >= faixa.vinicial &&
        salario <= faixa.vfinal) {
        faixaSelecionada = faixa;
      }
    });

    return faixaSelecionada;
  },

  /**
   * Prepara o valor para ser calculado.
   * Troca as vírgulas por pontos.
   * @param {string} valor Valor a ser preparado.
   * @return {number} Valor preparado para cálculo.
   */
  preparaValorCalculo: (valor) => {
    return parseFloat(valor.toString().replace(',', '.'));
  },

  /**
   * Corta as casas decimais em duas casas.
   * @param {number} valor Valor a ser cortado.
   * @return {number} Valor somente com duas casas decimais.
   */
  cortarCasasDecimais: (valor) => {
    const valores = valor.toString().split('.');
    let resultado = 0;
    if (valores[1]) {
        resultado = `${valores[0]}.${valores[1].substr(0, 2)}`;
    } else {
        resultado = valores[0];
    }

    return parseFloat(resultado);
  },

  /**
   * Calcula a alíquota real com base no salário e valor calculado.
   * Utiliza regra de três.
   * @param {number} salario Salário a ser utilizado no cálculo.
   * @param {number} valor Valor a ser utilizado no cálculo.
   * @return {number} Alíquota real com base nos parâmetros informados.
   */
  calculaAliquotaReal: (salario, valor) => {
    return valor * 100 / salario;
  },

  /**
   * Limpa os valores de cálculo.
   * Utilizado para evitar valores antigos em novos cálculos.
   */
  limpaValores: () => {
    calculo.resultado.salario = 0;
    calculo.resultado.valor = 0;
    calculo.resultado.aliquota = 0;
    calculo.resultado.faixa = 0;
  },

  /**
   * Calcula INSS com base no salário informado.
   * @param {number} salario Salário para o cálculo do INSS.
   * @return {object} Cálculo do INSS com Salário, valor, aliquota e faixa.
   */
  calculaINSS: (salario) => {
    calculo.limpaValores();
    const salarioPreparado = calculo.preparaValorCalculo(salario);
    calculo.resultado.salario = salarioPreparado;

    const faixa = calculo.selecionaFaixa(salarioPreparado);

    if (faixa.numero < 4) {
      calculo.resultado.valor = salarioPreparado * faixa.aliquota / 100;
      calculo.resultado.aliquota = faixa.aliquota;
      calculo.resultado.aliquotaReal = faixa.aliquota;
      calculo.resultado.faixa = faixa.numero;
    } else {
      calculo.resultado.salario = faixa.vinicial;
      calculo.resultado.valor = faixa.vinicial * faixa.aliquota / 100;
      calculo.resultado.aliquota = faixa.aliquota;
      calculo.resultado.aliquotaReal = faixa.aliquota;
      calculo.resultado.faixa = faixa.numero;
    }

    return calculo.resultado;
  },

  /**
   * Calcula INSS com base no salário informado.
   * Este utiliza nova tabela do INSS.
   * @param {number} salario Salário para o cálculo do INSS.
   * @return {object} Cálculo do INSS com Salário, valor, aliquota e faixa.
   */
  calculaNovoINSS: (salario) => {
    calculo.limpaValores();

    if (salario > calculo.faixas[1][3].vfinal) {
      salario = calculo.faixas[1][3].vfinal;
    }

    const faixaSelecionada = calculo.selecionaFaixaNova(salario);
    let valorParcial = 0;

    calculo.faixas[1].forEach((faixa) => {
      if (faixa.numero <= faixaSelecionada.numero) {
        let diferenca = 0;
        if (salario > faixa.vfinal && faixa.numero < 5) {
          diferenca = faixa.vfinal - faixa.vinicial;
        } else {
          diferenca = salario - faixa.vinicial;
        }

        let diferencaParcial = diferenca * faixa.aliquota / 100;

        valorParcial += calculo.cortarCasasDecimais(diferencaParcial);
        
        calculo.resultado.valor = valorParcial.toFixed(2);

        calculo.resultado.salario = salario;
        calculo.resultado.aliquota = faixa.aliquota;

        calculo.resultado.aliquotaReal = calculo.calculaAliquotaReal(
          salario,
          calculo.resultado.valor
        );
        
        calculo.resultado.faixa = faixa.numero;
      }
    });

    return calculo.resultado;
  },
};

module.exports = calculo;

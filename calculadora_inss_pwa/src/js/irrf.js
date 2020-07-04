if(typeof process === 'object') {
    Util = require('./util')
}

const CalculoIRRF = {

    /**
     * Valor descontado por dependente
     */
    dependente: 189.59,

    /**
     * Valor descontado para aposentados com mais de 65 anos
     */
    aposentado: 1903.98,

    /**
     * Resultados do Sistema.
     * Inclui o salário, alíquota, faixa e o valor.
     */
    resultado: {
        salario: 0,
        aliquota: 0,
        faixa: 0,
        valor: 0,
    },

    /**
     * Arrrays de Faixas da Tabela do IRRF.
     */
    faixas: [
        {
            vinicial: 0,
            vfinal: 1903.98,
            aliquota: 0,
            deduzido: 0,
        }, {
            vinicial: 1903.99,
            vfinal: 2826.65,
            aliquota: 7.5,
            deduzido: 142.80,
        }, {
            vinicial: 2826.66,
            vfinal: 3751.05,
            aliquota: 15,
            deduzido: 354.80,
        }, {
            vinicial: 3751.06,
            vfinal: 4664.68,
            aliquota: 22.5,
            deduzido: 636.13,
        }, {
            vinicial: 4664.68,
            vfinal: 99999999,
            aliquota: 27.5,
            deduzido: 869.36,
        },
    ],

    /**
     * Seleciona a Faixa do IRRF conforme salário.
     * @param {number} salario Salário a ser analisado.
     * @return {object} faixa Retorna a Faixa seleciona com base no
     * salário informado.
     */
    selecionaFaixa: function(salario) {
        let faixaSelecionada = 0

        this.faixas.forEach((faixa) => {
            if (salario >= faixa.vinicial && salario <= faixa.vfinal) {
                faixaSelecionada = faixa
            }
        })

        return faixaSelecionada
    },

    /**
     * Limpa os valores de cálculo.
     * Utilizado para evitar valores antigos em novos cálculos.
     */
    limpaValores: function() {
        this.resultado.salario = 0
        this.resultado.valor = 0
        this.resultado.aliquota = 0
    },

    deduzAposentado(salario) {
        if (salario > this.aposentado) {
            return salario - this.aposentado
        } else {
            return 0
        }
    },

    deduzDependentes(salario, dependentes) {
        const valorDependentes = dependentes * this.dependente
        if (salario > valorDependentes) {
            return salario - valorDependentes
        } else {
            return 0
        }
    },

    /**
     * Calcula IRRF com base no salário informado.
     * @param {number} salario Salário para o cálculo do IRRF.
     * @return {object} Cálculo do IRRF com Salário, valor, aliquota e faixa.
     */
    calculaIRRF: function(salario) {
        this.limpaValores()
        const salarioPreparado = Util.preparaValorCalculo(salario)
        this.resultado.salario = salarioPreparado

        const faixa = this.selecionaFaixa(salarioPreparado)

        this.resultado.valor = (salarioPreparado * faixa.aliquota / 100) - faixa.deduzido
        this.resultado.aliquota = faixa.aliquota
        
        return this.resultado
    }

}

if(typeof process === 'object') {
    module.exports = CalculoIRRF
}

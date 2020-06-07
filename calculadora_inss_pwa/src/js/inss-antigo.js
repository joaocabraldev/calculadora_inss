if(typeof process === 'object') {
    Util = require('./util')
}

/**
 * Constante de Cálculos do INSS Antigo.
 */
const CalculoINSSAntigo = {

    /**
     * Resultados do Sistema.
     * Inclui o salário, alíquota, alíquotaReal, faixa e o valor.
     */
    resultado: {
        salario: 0,
        aliquota: 0,
        aliquotaReal: 0,
        faixa: 0,
        valor: 0
    },

    /**
     * Arrrays de Faixas de da Tabela do INSS.
     */
    faixas: [
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

    /**
     * Seleciona a Faixa do INSS conforme salário.
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
        this.resultado.faixa = 0
    },

    /**
     * Calcula INSS com base no salário informado.
     * @param {number} salario Salário para o cálculo do INSS.
     * @return {object} Cálculo do INSS com Salário, valor, aliquota e faixa.
     */
    calculaINSS: function(salario) {
        this.limpaValores()
        const salarioPreparado = Util.preparaValorCalculo(salario)
        this.resultado.salario = salarioPreparado

        const faixa = this.selecionaFaixa(salarioPreparado)

        if (faixa.numero < 4) {
            this.resultado.valor = salarioPreparado * faixa.aliquota / 100
            this.resultado.aliquota = faixa.aliquota
            this.resultado.aliquotaReal = faixa.aliquota
            this.resultado.faixa = faixa.numero
        } else {
            this.resultado.salario = faixa.vinicial
            this.resultado.valor = faixa.vinicial * faixa.aliquota / 100
            this.resultado.aliquota = faixa.aliquota
            this.resultado.aliquotaReal = faixa.aliquota
            this.resultado.faixa = faixa.numero
        }

        return this.resultado
    }
    
}

if(typeof process === 'object') {
    module.exports = CalculoINSSAntigo
}
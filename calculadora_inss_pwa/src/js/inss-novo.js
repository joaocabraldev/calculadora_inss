if(typeof process === 'object') {
    Util = require('./util')
}

/**
 * Constante de Cálculos do INSS Novo.
 */
const CalculoINSSNovo = {

    /**
     * Resultados do Sistema.
     * Inclui o salário, alíquota, alíquotaReal faixa e o valor.
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
     */
    faixas: [
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

    /**
     * Seleciona a Nova Faixa do INSS conforme salário.
     * @param {number} salario Salário a ser analisado.
     * @return {object} faixa Retorna a Faixa seleciona com base no
     * salário informado.
     */
    selecionaFaixa: function(salario) {
        let faixaSelecionada = 0

        this.faixas.forEach((faixa) => {
            if (salario >= faixa.vinicial &&
        salario <= faixa.vfinal) {
                faixaSelecionada = faixa
            }
        })

        return faixaSelecionada
    },

    /**
     * Calcula a alíquota real com base no salário e valor calculado.
     * Utiliza regra de três.
     * @param {number} salario Salário a ser utilizado no cálculo.
     * @param {number} valor Valor a ser utilizado no cálculo.
     * @return {number} Alíquota real com base nos parâmetros informados.
     */
    calculaAliquotaReal: function(salario, valor) {
        return valor * 100 / salario
    },

    /**
     * Limpa os valores de cálculo.
     * Utilizado para evitar valores antigos em novos cálculos.
     */
    limpaValores() {
        this.resultado.salario = 0
        this.resultado.valor = 0
        this.resultado.aliquota = 0
        this.resultado.aliquotaReal = 0
        this.resultado.faixa = 0
    },

    /**
     * Calcula INSS com base no salário informado.
     * Este utiliza nova tabela do INSS.
     * @param {number} salario Salário para o cálculo do INSS.
     * @return {object} Cálculo do INSS com Salário, valor, aliquota e faixa.
     */
    calculaINSS: function(salario) {
        this.limpaValores()

        if (salario > this.faixas[3].vfinal) {
            salario = this.faixas[3].vfinal
        }

        const faixaSelecionada = this.selecionaFaixa(salario)
        let valorParcial = 0

        this.faixas.forEach((faixa) => {
            if (faixa.numero <= faixaSelecionada.numero) {
                let diferenca = 0
                if (salario > faixa.vfinal && faixa.numero < 5) {
                    diferenca = faixa.vfinal - faixa.vinicial
                } else {
                    diferenca = salario - faixa.vinicial
                }

                const diferencaParcial = diferenca * faixa.aliquota / 100

                valorParcial += Util.cortarCasasDecimais(diferencaParcial)

                this.resultado.valor = valorParcial.toFixed(2)

                this.resultado.salario = salario
                this.resultado.aliquota = faixa.aliquota

                this.resultado.aliquotaReal = this.calculaAliquotaReal(
                    salario,
                    this.resultado.valor
                )

                this.resultado.faixa = faixa.numero
            }
        })

        return this.resultado
    }
}

if(typeof process === 'object') {
    module.exports = CalculoINSSNovo
}

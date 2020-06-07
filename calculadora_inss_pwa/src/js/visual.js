/**
 * Constante para a parte Visual do sistema.
 */
const Visual = {

    /**
     * Mostra a parte do Cálculo.
     */
    mostraCalculo: function() {
        const calculo = document.getElementById('calculo')
        calculo.style.display = 'block'

        const tabela = document.getElementById('tabela')
        tabela.style.display = 'none'
    },

    /**
     * Mostra a parte da Tabela INSS.
     */
    mostraTabela: function() {
        const calculo = document.getElementById('calculo')
        calculo.style.display = 'none'

        const tabela = document.getElementById('tabela')
        tabela.style.display = 'block'
    },

    /**
     * Obtém o tipo de cálculo conforme selecionado
     * na tela usando os radiobuttons com name rbINSS.
     * @return {number} Tipo de Cálculo. 1 - Antigo, 2 - Novo
     */
    obtemTipoCalculo: function() {
        const rbsINSS = document.getElementsByName('rbINSS')
        let inss = 0

        for (let i = 0, length = rbsINSS.length; i < length; i++) {
            if (rbsINSS[i].checked) {
                inss = rbsINSS[i].value
                break
            }
        }

        return inss
    },

    /**
     * Obtém o valor do salário do input na tela.
     * @return {string} Salário informado na tela.
     */
    obtemValorSalario: function() {
        return document.getElementById('txtSalario').value
    },

    /**
     * Prepara o valor para exibição na tela.
     * Converte valor em String e troca ponto por vírgula.
     * @param {number} valor Valor a ser preparado.
     * @return {string} Valor a ser exibido.
     */
    preparaValorExibicao: function(valor) {
        return valor.toString().replace('.', ',')
    },

    /**
     * Exibe os valores recebidos na tela.
     * Prepara os valores para exibição.
     * @param {object} valores Objeto com valores a serem exibidos.
     * Espera salario, aliquota e valor.
     */
    exibeValores: function(valores) {
        const salario = this.preparaValorExibicao(valores.salario)
        const aliquota = this.preparaValorExibicao(valores.aliquota.toString())
        const aliquotaReal = this.preparaValorExibicao(valores.aliquotaReal.toString())

        const resultadoTemp = valores.valor
            .toString()
            .match(/^-?\d+(?:\.\d{0,2})?/)[0]

        const resultado = this.preparaValorExibicao(resultadoTemp)

        const elResultado = document.getElementById('resultado')
        elResultado.innerHTML = `
            Cálculo: R$${salario} * ${aliquota}% = R$${resultado} <br /><br />
            Alíquota Real: ${aliquotaReal}
        `
        elResultado.style.display = 'block'
    },

}

if(typeof process === 'object') {
    module.exports = Visual
}

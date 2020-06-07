/**
 * Constante de Utilitários para o sistema.
 */
const Util = {

    /**
     * Prepara o valor para ser calculado.
     * Troca as vírgulas por pontos.
     * @param {string} valor Valor a ser preparado.
     * @return {number} Valor preparado para cálculo.
     */
    preparaValorCalculo: function(valor) {
        return parseFloat(valor.toString().replace(',', '.'))
    },

    /**
     * Corta as casas decimais em duas casas.
     * @param {number} valor Valor a ser cortado.
     * @return {number} Valor somente com duas casas decimais.
     */
    cortarCasasDecimais: function(valor) {
        const valores = valor.toString().split('.')
        let resultado = 0
        if (valores[1]) {
            resultado = `${valores[0]}.${valores[1].substr(0, 2)}`
        } else {
            resultado = valores[0]
        }

        return parseFloat(resultado)
    },

}

if(typeof process === 'object') {
    module.exports = Util
}

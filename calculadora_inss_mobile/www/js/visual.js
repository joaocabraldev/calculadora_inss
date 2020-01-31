/**
 * Constante para a parte Visual do sistema.
 */
const visual = {
    /**
     * Obtém o tipo de cálculo conforme selecionado
     * na tela usando os radiobuttons com name rbINSS.
     * @return Tipo de Cálculo. 1 - Antigo, 2 - Novo
     */
    obtemTipoCalculo: () => {
        const rbsINSS = document.getElementsByName("rbINSS");
        let inss = 0;

        for (let i = 0, length = rbsINSS.length; i < length; i++) {
            if (rbsINSS[i].checked) {
                inss = rbsINSS[i].value;
                break;
            }
        }

        return inss;
    },

    /**
     * Obtém o valor do salário do input na tela.
     * @return Salário informado na tela.
     */
    obtemValorSalario: () => {
        return document.getElementById('txtSalario').value;
    },

    /**
     * Prepara o valor para exibição na tela.
     * Converte valor em String e troca ponto por vírgula.
     * @param valor Valor a ser preparado.
     */
    preparaValorExibicao: (valor) => {
        return valor.toString().replace('.', ',');
    },

    /**
     * Exibe os valores recebidos na tela.
     * Prepara os valores para exibição.
     * @param valores Objeto com valores a serem exibidos.
     * Espera salario, aliquota e valor.
     */
    exibeValores: (valores) => {
        const salario = visual.preparaValorExibicao(valores.salario);
        const aliquota = visual.preparaValorExibicao(valores.aliquota.toString());
        const resultadoTemp = valores.valor
                                 .toString()
                                 .match(/^-?\d+(?:\.\d{0,2})?/)[0];
        const resultado = visual.preparaValorExibicao(resultadoTemp);

        const elResultado = document.getElementById('resultado');
        elResultado.innerHTML = `
            Cálculo: R$${salario} * ${aliquota}% = R$${resultado}
        `;
        elResultado.style.display = 'block';
    }
};

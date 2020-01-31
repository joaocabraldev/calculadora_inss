/**
 * Constante do aplicativo.
 * Contém os métodos para cálculo do INSS.
 */
const app = {

    /**
     * Realiza o cálculo do INSS.
     * Calcula conforme o tipo de Cálculo.
     */
    calcular: () => {
        const tipoCalculo = visual.obtemTipoCalculo();
        if (tipoCalculo == 1) {
            app.calcularAntigo();
        } else {
            app.calcularNovo();
        }
    },

    /**
     * Realiza o cálculo do INSS conforme cálculo antigo.
     * Tabela Jan e Fev 2020 ou anterior.
     */
    calcularAntigo: () => {
        const salario = visual.obtemValorSalario();
        const valores = calculo.calculaINSS(salario);
        
        if (salario) {
            visual.exibeValores(valores);
        }
    },

    /**
     * Realiza o cálculo do INSS conforme cálculo novo.
     * Tabela Mar 2020 ou posterior.
     */
    calcularNovo: () => {
        const salario = visual.obtemValorSalario();
        const valores = calculo.calculaNovoINSS(salario);
        
        if (salario) {
            visual.exibeValores(valores);
        }
    },
};
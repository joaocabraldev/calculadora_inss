package br.com.joaocabral.calculadora_inss_java.model;

/**
 * Entidade de Resultado.
 * @author João Antônio Cabral.
 */
public class Resultado {
    
    public Double salario;
    public Double aliquota;
    public Integer faixa;
    public Double valor;

    public Resultado() {
    
    }

    public Resultado(Double salario, Double aliquota, Integer faixa, Double valor) {
        this.salario = salario;
        this.aliquota = aliquota;
        this.faixa = faixa;
        this.valor = valor;
    }

    @Override
    public String toString() {
        return "Resultado: R$" 
                + preparaValorExibicao(salario) + " * " 
                + preparaValorExibicao(aliquota) + "% = R$" 
                + preparaValorExibicao(valor);
    }
    
    private String preparaValorExibicao(Double valor) {
        return valor.toString().replace(".", ",");
    }
}

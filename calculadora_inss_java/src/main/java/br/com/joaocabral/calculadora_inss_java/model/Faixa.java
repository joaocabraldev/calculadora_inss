package br.com.joaocabral.calculadora_inss_java.model;

/**
 * Entidade de Faixa.
 * @author João Antônio Cabral.
 */
public class Faixa {
    
    public Double vinicial;
    public Double vfinal;
    public Double aliquota;
    public Integer numero;

    public Faixa() {
    
    }
    
    public Faixa(Double vinicial, Double vfinal, Double aliquota, Integer numero) {
        this.vinicial = vinicial;
        this.vfinal = vfinal;
        this.aliquota = aliquota;
        this.numero = numero;
    }
    
}

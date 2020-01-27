package br.com.joaocabral.calculadora_inss_java.model;

import java.util.Objects;

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
        this.salario = 0.0;
        this.aliquota = 0.0;
        this.faixa = 0;
        this.valor = 0.0;
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
                + trocaPontoVirgula(aliquota) + "% = R$" 
                + preparaValorExibicao(valor);
    }
    
    /**
     * Prepara os valores para exibição na tela.
     * @param valor Valor a ser preparado.
     * @return Valor preparado para ser exibido.
     */
    public String preparaValorExibicao(Double valor) {
        String semPontos = trocaPontoVirgula(valor);
        String[] partes = semPontos.split(",");
        String total;
        
        if (partes.length >= 2) {
            if (partes[1].length() >= 2) {
                total = partes[0] + "," + partes[1].substring(0, 2);
            } else {
                int tamanho = partes[1].length();
                total = partes[0] + "," + partes[1].substring(0, tamanho);
            }
        } else {
            total = partes[0];
        }
        
        return total;
    }
    
    /**
     * Troca os pontos por vírgula.
     * @param valor Valor a ser preparado.
     * @return Valor preparado.
     */
    public String trocaPontoVirgula(Double valor) {
        return valor.toString().replace(".", ",");
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 43 * hash + Objects.hashCode(this.salario);
        hash = 43 * hash + Objects.hashCode(this.aliquota);
        hash = 43 * hash + Objects.hashCode(this.faixa);
        hash = 43 * hash + Objects.hashCode(this.valor);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Resultado other = (Resultado) obj;
        if (!Objects.equals(this.salario, other.salario)) {
            return false;
        }
        if (!Objects.equals(this.aliquota, other.aliquota)) {
            return false;
        }
        if (!Objects.equals(this.faixa, other.faixa)) {
            return false;
        }
        if (!Objects.equals(this.valor, other.valor)) {
            return false;
        }
        return true;
    }
    
}

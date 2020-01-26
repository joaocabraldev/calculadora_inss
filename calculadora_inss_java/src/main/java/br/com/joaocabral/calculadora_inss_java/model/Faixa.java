package br.com.joaocabral.calculadora_inss_java.model;

import java.util.Objects;

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

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 17 * hash + Objects.hashCode(this.vinicial);
        hash = 17 * hash + Objects.hashCode(this.vfinal);
        hash = 17 * hash + Objects.hashCode(this.aliquota);
        hash = 17 * hash + Objects.hashCode(this.numero);
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
        
        final Faixa other = (Faixa) obj;
        if (!Objects.equals(this.vinicial, other.vinicial)) {
            return false;
        }
        
        if (!Objects.equals(this.vfinal, other.vfinal)) {
            return false;
        }
        
        if (!Objects.equals(this.aliquota, other.aliquota)) {
            return false;
        }
        
        if (!Objects.equals(this.numero, other.numero)) {
            return false;
        }
        
        return true;
    }

    @Override
    public String toString() {
        return "Faixa{" + "vinicial=" + vinicial + ", vfinal=" + vfinal + ", aliquota=" + aliquota + ", numero=" + numero + '}';
    }
    
}

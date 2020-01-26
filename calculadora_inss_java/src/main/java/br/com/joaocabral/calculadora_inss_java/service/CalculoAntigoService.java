package br.com.joaocabral.calculadora_inss_java.service;

import br.com.joaocabral.calculadora_inss_java.model.Faixa;
import br.com.joaocabral.calculadora_inss_java.model.Resultado;
import java.util.ArrayList;
import java.util.List;

/**
 * Serviço de Cálculos do INSS Antigo.
 * @author João Antônio Cabral.
 */
public class CalculoAntigoService {
    
    private static List<Faixa> FAIXAS;

    /**
     * Construtor padrão de CalculoAntigoService.
     * Preenche a lista de faixas.
     */
    public CalculoAntigoService() {
        FAIXAS = preencheFaixas();
    }
    
    /**
     * Seleciona a faixa com base no salário.
     * @param salario Salário a ser testado.
     * @return Faixa conforme salário informado.
     */
    public Faixa selecionarFaixa(final Double salario) {
        Faixa faixaSelecionada = null;

        for (final Faixa faixa : FAIXAS) {
            if (salario >= faixa.vinicial && salario <= faixa.vfinal) {
                faixaSelecionada = faixa;
            }
        }

        return faixaSelecionada;
    }

    /**
     * Calcula o valor do INSS conforme salário.
     * @param salario Salário a ser calculado.
     * @return Valor do INSS conforme salário.
     */
    public Resultado calcularINSS(final Double salario) {
        final Resultado resultado = new Resultado();
        final Faixa faixa = selecionarFaixa(salario);

        if (faixa.numero < 4) {
            resultado.salario = salario;
            resultado.valor = salario * faixa.aliquota / 100;
        } else {
            resultado.salario = faixa.vinicial;
            resultado.valor = faixa.vinicial * faixa.aliquota / 100;
        }

        resultado.aliquota = faixa.aliquota;
        resultado.faixa = faixa.numero;

        return resultado;
    }

    /**
     * Prepara o salário para ser calculado.
     * @param salario Salário a ser preparado.
     * @return Salário preparado.
     */
    public Double preparaSalarioCalculo(final String salario) {
        final String salarioPreparado = salario.replace(",", ".");
        return Double.valueOf(salarioPreparado);
    }

    /**
     * Preenche as faixas com valores padrão.
     * @return Faixa com valores padrão.
     */
    private List<Faixa> preencheFaixas() {
        final List<Faixa> faixas = new ArrayList<>();
        
        faixas.add(new Faixa(0.0, 1830.30, 8.0, 1));
        faixas.add(new Faixa(1830.31, 3050.53, 9.0, 2));
        faixas.add(new Faixa(3050.54, 6101.06, 11.0, 3));
        faixas.add(new Faixa(6101.07, 99999999.0, 11.0, 4));
        
        return faixas;
    }

}

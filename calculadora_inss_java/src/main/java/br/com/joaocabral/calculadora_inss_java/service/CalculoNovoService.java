package br.com.joaocabral.calculadora_inss_java.service;

import br.com.joaocabral.calculadora_inss_java.model.Faixa;
import br.com.joaocabral.calculadora_inss_java.model.Resultado;
import java.util.ArrayList;
import java.util.List;

/**
 * Serviço de Cálculos do INSS Novo.
 * @author João Antônio Cabral.
 */
public class CalculoNovoService {
    
    private static List<Faixa> FAIXAS;

    /**
     * Construtor padrão de CalculoNovoService.
     * Preenche a lista de faixas.
     */
    public CalculoNovoService() {
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
        final Faixa faixaSelecionada = selecionarFaixa(salario);

        for (Faixa faixa : FAIXAS) {
            if (faixa.numero <= faixaSelecionada.numero) {
                Double diferenca;
                
                if (salario > faixa.vfinal) {
                    diferenca = faixa.vfinal - faixa.vinicial;
                } else {
                    diferenca = salario - faixa.vinicial;
                }
                
                resultado.valor += diferenca * faixa.aliquota / 100;
                resultado.salario = salario;
                resultado.faixa = faixa.numero;
                resultado.aliquota = calculaAliquotaReal(salario, resultado.valor);
                
            }
        }
        
        return resultado;
    }

    /**
     * Calcula alíquota real por regra de três.
     * @param salario Salário as ser calculado.
     * @param valor valor a ser calculado.
     * @return Alíquota real com base em Salário e valores informados.
     */
    public Double calculaAliquotaReal(Double salario, Double valor) {
        return valor * 100 / salario;
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
        
        faixas.add(new Faixa(0.0, 1039.00, 7.5, 1));
        faixas.add(new Faixa(1039.01, 2089.60, 9.0, 2));
        faixas.add(new Faixa(2089.61, 3134.40, 12.0, 3));
        faixas.add(new Faixa(3134.41, 6101.06, 14.0, 4));
        faixas.add(new Faixa(6101.07, 999999.99, 14.0, 5));
        
        return faixas;
    }

}

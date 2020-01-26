package br.com.joaocabral.calculadora_inss_java.service;

import br.com.joaocabral.calculadora_inss_java.model.Faixa;
import br.com.joaocabral.calculadora_inss_java.model.Resultado;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Teste da classe CalculoAntigoService.
 * @author João Antônio Cabral.
 */
public class CalculoAntigoServiceTest {
    
    public CalculoAntigoServiceTest() {
    }

    @Test
    public void testSelecionarFaixa() {
        CalculoAntigoService instance = new CalculoAntigoService();
        
        Faixa expResult1 = new Faixa(0.0, 1830.30, 8.0, 1);
        Faixa result1 = instance.selecionarFaixa(1000.0);
        assertEquals(expResult1, result1);
        
        Faixa expResult2 = new Faixa(1830.31, 3050.53, 9.0, 2);
        Faixa result2 = instance.selecionarFaixa(2000.0);
        assertEquals(expResult2, result2);
        
        Faixa expResult3 = new Faixa(3050.54, 6101.06, 11.0, 3);
        Faixa result3 = instance.selecionarFaixa(4000.0);
        assertEquals(expResult3, result3);
        
        Faixa expResult4 = new Faixa(6101.07, 99999999.0, 11.0, 4);
        Faixa result4 = instance.selecionarFaixa(10000.0);
        assertEquals(expResult4, result4);
    }

    @Test
    public void testPreparaSalarioCalculo() {
        CalculoAntigoService instance = new CalculoAntigoService();
        
        Double expResult1 = 1000.0;
        Double result1 = instance.preparaSalarioCalculo("1000");
        assertEquals(expResult1, result1);

        Double expResult2 = 2547.456;
        Double result2 = instance.preparaSalarioCalculo("2547,456");
        assertEquals(expResult2, result2);
        
        Double expResult3 = 7498.0;
        Double result3 = instance.preparaSalarioCalculo("7498,0");
        assertEquals(expResult3, result3);
        
        Double expResult4 = 7.5;
        Double result4 = instance.preparaSalarioCalculo("7,5");
        assertEquals(expResult4, result4);
    }
    
    @Test
    public void testCalcularINSS() {        
        CalculoAntigoService instance = new CalculoAntigoService();
        
        Resultado expResult1 = new Resultado(1000.0, 8.0, 1, 80.0);
        Resultado result1 = instance.calcularINSS(1000.0);
        assertEquals(expResult1, result1);
        
        Resultado expResult2 = new Resultado(2000.0, 9.0, 2, 180.0);
        Resultado result2 = instance.calcularINSS(2000.0);
        assertEquals(expResult2, result2);
        
        Resultado expResult3 = new Resultado(4000.0, 11.0, 3, 440.0);
        Resultado result3 = instance.calcularINSS(4000.0);
        assertEquals(expResult3, result3);
        
        Resultado expResult4 = new Resultado(6101.07, 11.0, 4, 671.1176999999999);
        Resultado result4 = instance.calcularINSS(10000.0);
        assertEquals(expResult4, result4);
    }

}

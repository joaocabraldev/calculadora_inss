package br.com.joaocabral.calculadora_inss_java.model;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * TEste da Classe Resultado.
 * @author João Antônio Cabral.
 */
public class ResultadoTest {
    
    public ResultadoTest() {
    
    }

    @Test
    public void testTrocaPontoVirgula() {
        String expResult1 = "1000,0";
        Resultado resultado1 = new Resultado();
        String result1 = resultado1.trocaPontoVirgula(1000.0);
        assertEquals(expResult1, result1);
        
        String expResult2 = "999,0785";
        Resultado resultado2 = new Resultado();
        String result2 = resultado2.trocaPontoVirgula(999.0785);
        assertEquals(expResult2, result2);
        
        String expResult3 = "457,6547";
        Resultado resultado3 = new Resultado();
        String result3 = resultado3.trocaPontoVirgula(457.6547);
        assertEquals(expResult3, result3);
    }
    
    @Test
    public void testPreparaValorExibicao() {
        String expResult1 = "1000,0";
        Resultado resultado1 = new Resultado();
        String result1 = resultado1.preparaValorExibicao(1000.0);
        assertEquals(expResult1, result1);
        
        String expResult2 = "999,07";
        Resultado resultado2 = new Resultado();
        String result2 = resultado2.preparaValorExibicao(999.0785);
        assertEquals(expResult2, result2);
        
        String expResult3 = "457,65";
        Resultado resultado3 = new Resultado();
        String result3 = resultado3.preparaValorExibicao(457.6547);
        assertEquals(expResult3, result3);
    }

    @Test
    public void testToString() {
        String expResult1 = "Resultado: R$1000,0 * 8,0% = R$80,0";
        Resultado resultado1 = new Resultado();
        resultado1.salario = 1000.0;
        resultado1.aliquota = 8.0;
        resultado1.valor = 80.0;
        resultado1.faixa = 1;
        String result1 = resultado1.toString();
        assertEquals(expResult1, result1);
        
        String expResult2 = "Resultado: R$2150,52 * 9,0% = R$193,53";
        Resultado resultado2 = new Resultado();
        resultado2.salario = 2150.529;
        resultado2.aliquota = 9.0;
        resultado2.valor = 193.53;
        resultado2.faixa = 2;
        String result2 = resultado2.toString();
        assertEquals(expResult2, result2);
        
        String expResult3 = "Resultado: R$3784,45 * 11,0% = R$416,29";
        Resultado resultado3 = new Resultado();
        resultado3.salario = 3784.456;
        resultado3.aliquota = 11.0;
        resultado3.valor = 416.29;
        resultado3.faixa = 3;
        String result3 = resultado3.toString();
        assertEquals(expResult3, result3);
        
        String expResult4 = "Resultado: R$10000,0 * 11,0% = R$671,11";
        Resultado resultado4 = new Resultado();
        resultado4.salario = 10000.0;
        resultado4.aliquota = 11.0;
        resultado4.valor = 671.11;
        resultado4.faixa = 4;
        String result4 = resultado4.toString();
        assertEquals(expResult4, result4);
    }
    
}

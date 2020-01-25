package br.com.joaocabral.calculadora_inss_java;

import br.com.joaocabral.calculadora_inss_java.view.MainView;

/**
 * Classe Principal do sistema.
 * @author João Antônio Cabral.
 */
public class Main {
    
    public static void main(String[] args) {
        MainView view = new MainView();
        view.setLocationRelativeTo(null);
        view.setVisible(true);
    }
    
}

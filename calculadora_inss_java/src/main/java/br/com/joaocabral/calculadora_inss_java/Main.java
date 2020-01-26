package br.com.joaocabral.calculadora_inss_java;

import br.com.joaocabral.calculadora_inss_java.view.MainView;

/**
 * Classe Principal do sistema.
 * @author João Antônio Cabral.
 */
public class Main {
    
    /**
     * Método executável da classe Main.
     * Instancia a MainView e torna visível.
     * @param args Argumentos do programa. Ignorados neste caso.
     */
    public static void main(String[] args) {
        MainView view = new MainView();
        view.setLocationRelativeTo(null);
        view.setVisible(true);
    }
    
}

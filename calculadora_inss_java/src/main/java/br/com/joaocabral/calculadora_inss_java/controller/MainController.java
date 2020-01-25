package br.com.joaocabral.calculadora_inss_java.controller;

import br.com.joaocabral.calculadora_inss_java.model.Resultado;
import br.com.joaocabral.calculadora_inss_java.service.CalculoService;
import br.com.joaocabral.calculadora_inss_java.view.MainView;

/**
 * Controlador da janela principal.
 * @author João Antônio Cabral.
 */
public class MainController {
    
    private final MainView view;
    private final CalculoService service;

    public MainController(MainView view) {
        this.view = view;
        service = new CalculoService();
    }

    public MainController(MainView view, CalculoService service) {
        this.view = view;
        this.service = service;
    }
    
    public void calcular() {
        Double salario = service.preparaSalarioCalculo(view.getTxtSalario().getText());
        Resultado resultado;
        
        if (isINSSAntigo()) {
            resultado = service.calcularINSS(salario);
        } else {
            resultado = service.calcularINSS(salario);
        }
        
        view.getLblResultado().setText(resultado.toString());
    }
    
    private boolean isINSSAntigo() {
        return view.getRbINSSAntigo().isSelected();
    }
    
}

package br.com.joaocabral.calculadora_inss_java.controller;

import br.com.joaocabral.calculadora_inss_java.model.Resultado;
import br.com.joaocabral.calculadora_inss_java.service.CalculoAntigoService;
import br.com.joaocabral.calculadora_inss_java.service.CalculoNovoService;
import br.com.joaocabral.calculadora_inss_java.view.MainView;

/**
 * Controlador da janela principal.
 * @author João Antônio Cabral.
 */
public class MainController {
    
    private final MainView view;
    private final CalculoAntigoService service;
    private final CalculoNovoService serviceNovo;

    /**
     * Construtor Principal do MainController.
     * Define a view e instancia os Services.
     * @param view View repassada ao controlador.
     */
    public MainController(MainView view) {
        this.view = view;
        service = new CalculoAntigoService();
        serviceNovo = new CalculoNovoService();
    }

    /**
     * Construtor secundário do MainController.
     * Define a View e services. Utilizado para testes.
     * @param view View repassada ao controlador.
     * @param service Service repassado ao controlador.
     * @param serviceNovo Service novo repassado ao controlador.
     */
    public MainController(MainView view, CalculoAntigoService service, CalculoNovoService serviceNovo) {
        this.view = view;
        this.service = service;
        this.serviceNovo = serviceNovo;
    }
    
    /**
     * Realiza o cálculo exibindo na tela.
     * Trata se deve Calcular INSS Antigo ou Novo conforme opção selecionada.
     */
    public void calcular() {
        Double salario = service.preparaSalarioCalculo(view.getTxtSalario().getText());
        Resultado resultado;
        
        if (isINSSAntigo()) {
            resultado = service.calcularINSS(salario);
        } else {
            resultado = serviceNovo.calcularINSS(salario);
        }
        
        view.getLblResultado().setText(resultado.toString());
    }
    
    /**
     * Verifica se a opção de INSS Antigo está marcada.
     * @return Se o INSS Antigo está marcado.
     */
    private boolean isINSSAntigo() {
        return view.getRbINSSAntigo().isSelected();
    }
    
}

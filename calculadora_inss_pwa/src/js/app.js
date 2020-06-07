/* global Visual, Calculo */

const App = {

    visual: null,
    calculoAntigo: null,
    calculoNovo: null,

    /**
     * Inicializa o aplicativo.
     */
    init: function() {
        this.visual = Visual
        this.calculoAntigo = CalculoINSSAntigo
        this.calculoNovo = CalculoINSSNovo
        this.iniciaServiceWorker()
        this.preparaNavegacao()
        this.inicializaBotaoInstalacao()
        this.preparaInputText()
    },

    /**
     * Inicializa o ServiceWorker
     */
    iniciaServiceWorker: function() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .catch(() => {
                    console.warn('service worker failed')
                })
        }
    },

    /**
     * Prepara os botões de Navegação.
     */
    preparaNavegacao: function() {
        const calculoBtn = document.getElementById('calculoBtn')
        calculoBtn.addEventListener('click', this.visual.mostraCalculo)
        const tabelaBtn = document.getElementById('tabelaBtn')
        tabelaBtn.addEventListener('click', this.visual.mostraTabela)
    },

    /**
     * Inicializa o botão de Instalação.
     */
    inicializaBotaoInstalacao: function() {
        let deferredPrompt
        const installBtn = document.getElementById('installBtn')
        installBtn.style.display = 'none'

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault()
            deferredPrompt = e
            installBtn.style.display = 'block'

            installBtn.addEventListener('click', () => {
                installBtn.style.display = 'none'
                deferredPrompt.prompt()
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt')
                    } else {
                        console.log('User dismissed the A2HS prompt')
                    }
                    deferredPrompt = null
                })
            })
        })
    },

    /**
     * Prepara o input para receber tecla Enter.
     */
    preparaInputText: function() {
        const txtSalario = document.getElementById('txtSalario')
        txtSalario.addEventListener('keyup', (e) => {
            if (e.key == 'Enter') {
                this.calcular()
            }
        })
    },

    /**
     * Realiza o cálculo do INSS.
     * Calcula conforme o tipo de Cálculo.
     */
    calcular: function() {
        const tipoCalculo = this.visual.obtemTipoCalculo()
        if (tipoCalculo == 1) {
            this.calcularAntigo()
        } else {
            this.calcularNovo()
        }
    },

    /**
     * Realiza o cálculo do INSS conforme cálculo antigo.
     * Tabela Jan e Fev 2020 ou anterior.
     */
    calcularAntigo: function() {
        const salario = this.visual.obtemValorSalario()
        const valores = this.calculoAntigo.calculaINSS(salario)

        if (salario) {
            this.visual.exibeValores(valores)
        }
    },

    /**
     * Realiza o cálculo do INSS conforme cálculo novo.
     * Tabela Mar 2020 ou posterior.
     */
    calcularNovo: function() {
        const salario = this.visual.obtemValorSalario()
        const valores = this.calculoNovo.calculaINSS(salario)

        if (salario) {
            this.visual.exibeValores(valores)
        }
    },

}

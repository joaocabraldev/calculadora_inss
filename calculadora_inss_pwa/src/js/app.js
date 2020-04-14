/* global Visual, Calculo */

class App {

    visual = null;
    calculo = null;

    /**
     * Inicializa o aplicativo.
     */
    constructor() {
        this.iniciaServiceWorker()
        this.preparaNavegacao()
        this.inicializaBotaoInstalacao()
        this.preparaInputText()
        this.visual = new Visual()
        this.calculo = new Calculo()
    }

    /**
     * Inicializa o ServiceWorker
     */
    iniciaServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .catch(() => {
                    console.warn('service worker failed')
                })
        }
    }

    /**
     * Prepara os botões de Navegação.
     */
    preparaNavegacao() {
        const calculoBtn = document.getElementById('calculoBtn')
        calculoBtn.addEventListener('click', this.visual.mostraCalculo)
        const tabelaBtn = document.getElementById('tabelaBtn')
        tabelaBtn.addEventListener('click', this.visual.mostraTabela)
    }

    /**
     * Inicializa o botão de Instalação.
     */
    inicializaBotaoInstalacao() {
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
    }

    /**
     * Prepara o input para receber tecla Enter.
     */
    preparaInputText() {
        const txtSalario = document.getElementById('txtSalario')
        txtSalario.addEventListener('keyup', (e) => {
            if (e.key == 'Enter') {
                this.calcular()
            }
        })
    }

    /**
     * Realiza o cálculo do INSS.
     * Calcula conforme o tipo de Cálculo.
     */
    calcular() {
        const tipoCalculo = this.visual.obtemTipoCalculo()
        if (tipoCalculo == 1) {
            this.calcularAntigo()
        } else {
            this.calcularNovo()
        }
    }

    /**
     * Realiza o cálculo do INSS conforme cálculo antigo.
     * Tabela Jan e Fev 2020 ou anterior.
     */
    calcularAntigo() {
        const salario = this.visual.obtemValorSalario()
        const valores = this.calculo.calculaINSS(salario)

        if (salario) {
            this.visual.exibeValores(valores)
        }
    }

    /**
     * Realiza o cálculo do INSS conforme cálculo novo.
     * Tabela Mar 2020 ou posterior.
     */
    calcularNovo() {
        const salario = this.visual.obtemValorSalario()
        const valores = this.calculo.calculaNovoINSS(salario)

        if (salario) {
            this.visual.exibeValores(valores)
        }
    }

}

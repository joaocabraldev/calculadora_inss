const assert = require('assert')
const calculo = require('../src/js/irrf')


describe('Cálculo IRRF', function() {

    describe('selecionarFaixa', function() {

        it('Selecionar Primeira Faixa R$1000', function() {
            const expected = {
                vinicial: 0,
                vfinal: 1903.98,
                aliquota: 0,
                deduzido: 0,
            }
    
            const actual = calculo.selecionaFaixa(1000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.deduzido, expected.deduzido)
        })

        it('Selecionar Segunda Faixa R$2000', function() {
            const expected = {
                vinicial: 1903.99,
                vfinal: 2826.65,
                aliquota: 7.5,
                deduzido: 142.80,
            }
    
            const actual = calculo.selecionaFaixa(2000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.deduzido, expected.deduzido)
        })

        it('Selecionar Terceira Faixa R$3000', function() {
            const expected = {
                vinicial: 2826.66,
                vfinal: 3751.05,
                aliquota: 15,
                deduzido: 354.80,
            }
    
            const actual = calculo.selecionaFaixa(3000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.deduzido, expected.deduzido)
        })

        it('Selecionar Quarta Faixa R$4000', function() {
            const expected = {
                vinicial: 3751.06,
                vfinal: 4664.68,
                aliquota: 22.5,
                deduzido: 636.13,
            }
    
            const actual = calculo.selecionaFaixa(4000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.deduzido, expected.deduzido)
        })

        it('Selecionar Última Faixa R$5000', function() {
            const expected = {
                vinicial: 4664.68,
                vfinal: 99999999,
                aliquota: 27.5,
                deduzido: 869.36,
            }
    
            const actual = calculo.selecionaFaixa(5000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.deduzido, expected.deduzido)
        })

        it('Selecionar Última Faixa R$6000', function() {
            const expected = {
                vinicial: 4664.68,
                vfinal: 99999999,
                aliquota: 27.5,
                deduzido: 869.36,
            }
    
            const actual = calculo.selecionaFaixa(6000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.deduzido, expected.deduzido)
        })
    })

    describe('calculaIRRF', function() {

        it('Calcula IRRF para R$1000', function() {
            const expected = {
                salario: 1000,
                aliquota: 0,
                valor: 0,
            }

            const actual = calculo.calculaIRRF(1000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula IRRF para R$2000', function() {
            const expected = {
                salario: 2000,
                aliquota: 7.5,
                valor: 7.2,
            }

            const actual = calculo.calculaIRRF(1000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.valor, expected.valor)
        })

    })

})
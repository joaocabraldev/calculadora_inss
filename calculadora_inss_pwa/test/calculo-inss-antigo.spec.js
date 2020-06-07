const assert = require('assert')
const calculo = require('../src/js/inss-antigo')

describe('Cálculo Antigo', function() {

    describe('selecionarFaixa', function() {

        it('Selecionar Primeira Faixa R$1000', function() {
            const expected = {
                vinicial: 0,
                vfinal: 1830.30,
                aliquota: 8,
                numero: 1,
            }
            
            const actual = calculo.selecionaFaixa(1000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.numero, expected.numero)
        })

        it('Selecionar Segunda Faixa R$2000', function() {
            const expected =  {
                vinicial: 1830.31,
                vfinal: 3050.53,
                aliquota: 9,
                numero: 2,
            }
            
            const actual = calculo.selecionaFaixa(2000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.numero, expected.numero)
        })

        it('Selecionar Terceira Faixa R$3060', function() {
            const expected = {
                vinicial: 3050.54,
                vfinal: 6101.06,
                aliquota: 11,
                numero: 3,
            }
            
            const actual = calculo.selecionaFaixa(3060)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.numero, expected.numero)
        })

        it('Selecionar Quarta Faixa acima limite R$6200', function() {
            const expected = {
                vinicial: 6101.07,
                vfinal: 99999999,
                aliquota: 11,
                numero: 4,
            }
            
            const actual = calculo.selecionaFaixa(6200)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.numero, expected.numero)
        })

    })

    describe('calculaINSS', function() {

        it('Calcula INSS para R$1000', function() {
            const expected = {
                salario: 1000,
                aliquota: 8,
                aliquotaReal: 8,
                faixa: 1,
                valor: 80,
            }

            const actual = calculo.calculaINSS(1000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula INSS para R$2000', function() {
            const expected = {
                salario: 2000,
                aliquota: 9,
                aliquotaReal: 9,
                faixa: 2,
                valor: 180,
            }

            const actual = calculo.calculaINSS(2000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula INSS para R$4000', function() {
            const expected = {
                salario: 4000,
                aliquota: 11,
                aliquotaReal: 11,
                faixa: 3,
                valor: 440,
            }

            const actual = calculo.calculaINSS(4000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula INSS para R$7000', function() {
            const expected = {
                salario: 6101.07,
                aliquota: 11,
                aliquotaReal: 11,
                faixa: 4,
                valor: 671.1176999999999,
            }

            const actual = calculo.calculaINSS(7000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

    })

})
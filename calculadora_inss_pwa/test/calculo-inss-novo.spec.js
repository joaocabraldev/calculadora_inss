const assert = require('assert')
const calculo = require('../src/js/inss-novo')


describe('Cálculo Novo', function() {

    describe('selecionarFaixa', function() {

        it('Selecionar Primeira Faixa R$1000', function() {
            const expected = {
                vinicial: 0,
                vfinal: 1045.00,
                aliquota: 7.5,
                numero: 1,
            }
            
            const actual = calculo.selecionaFaixa(1000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.numero, expected.numero)
        })

        it('Selecionar Segunda Faixa R$2000', function() {
            const expected = {
                vinicial: 1045.01,
                vfinal: 2089.60,
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
                vinicial: 2089.61,
                vfinal: 3134.40,
                aliquota: 12,
                numero: 3,
            }
            
            const actual = calculo.selecionaFaixa(3060)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.numero, expected.numero)
        })

        it('Selecionar Quarta Faixa R$4000', function() {
            const expected = {
                vinicial: 3134.40,
                vfinal: 6101.06,
                aliquota: 14,
                numero: 4,
            }
            
            const actual = calculo.selecionaFaixa(4000)

            assert.equal(actual.vinicial, expected.vinicial)
            assert.equal(actual.vfinal, expected.vfinal)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.numero, expected.numero)
        })

        it('Selecionar Faixa acima limite R$7000', function() {
            const expected = 0
            
            const actual = calculo.selecionaFaixa(7000)

            assert.equal(actual, expected)
        })

    })

    describe('calculaAliquotaReal', function() {
        
        it('Calcula Aliquota Real R$1000', function() {
            const expected = 7.5
            
            const actual = calculo.calculaAliquotaReal(1000, 75)

            assert.equal(actual, expected)
        })

        it('Calcula Aliquota Real R$2000', function() {
            const expected = 8.216
            
            const actual = calculo.calculaAliquotaReal(2000, 164.32)

            assert.equal(actual, expected)
        })

        it('Calcula Aliquota Real R$3000', function() {
            const expected = 9.387666666666667
            
            const actual = calculo.calculaAliquotaReal(3000, 281.63)

            assert.equal(actual, expected)
        })

        it('Calcula Aliquota Real R$4000', function() {
            const expected = 10.4735
            
            const actual = calculo.calculaAliquotaReal(4000, 418.94)

            assert.equal(actual, expected)
        })

        it('Calcula Aliquota Real R$5000', function() {
            const expected = 11.1788
            
            const actual = calculo.calculaAliquotaReal(5000, 558.94)

            assert.equal(actual, expected)
        })

        it('Calcula Aliquota Real R$7000', function() {
            const expected = 11.687805069938666
            
            const actual = calculo.calculaAliquotaReal(6101.06, 713.08)

            assert.equal(actual, expected)
        })
        
    })

    describe('calculaINSS', function() {

        it('Calcula Novo INSS para R$1000', function() {
            const expected = {
                salario: 1000,
                aliquota: 7.5,
                aliquotaReal: 7.5,
                faixa: 1,
                valor: 75,
            }

            const actual = calculo.calculaINSS(1000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula Novo INSS para R$2000', function() {
            const expected = {
                salario: 2000,
                aliquota: 9,
                aliquotaReal: 8.2155,
                faixa: 2,
                valor: 164.31,
            }

            const actual = calculo.calculaINSS(2000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula Novo INSS para R$3000', function() {
            const expected = {
                salario: 3000,
                aliquota: 12,
                aliquotaReal: 9.387333333333334,
                faixa: 3,
                valor: 281.62,
            }

            const actual = calculo.calculaINSS(3000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula Novo INSS para R$4000', function() {
            const expected = {
                salario: 4000,
                aliquota: 14,
                aliquotaReal: 10.47325,
                faixa: 4,
                valor: 418.93,
            }

            const actual = calculo.calculaINSS(4000)

            assert.equal(actual.salario, expected.salario)
            assert.equal(actual.aliquota, expected.aliquota)
            assert.equal(actual.aliquotaReal, expected.aliquotaReal)
            assert.equal(actual.faixa, expected.faixa)
            assert.equal(actual.valor, expected.valor)
        })

        it('Calcula Novo INSS para R$7000 acima limite', function() {
            const expected = {
                salario: 6101.06,
                aliquota: 14,
                aliquotaReal: 11.687805069938666,
                faixa: 4,
                valor: 713.08,
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
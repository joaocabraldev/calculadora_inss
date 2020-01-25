const assert = require('assert');
const calculo = require('../src/js/calculo');

describe('Ferramentas INSS', () => {
    describe('Cálculo INSS', () => {
    
        it('Deve selecionar a faixa', () => {
            const faixaReal1 = calculo.selecionaFaixa('1000').numero;
            const faixaEsperada1 = 1;
            assert.equal(faixaReal1, faixaEsperada1);
    
            const faixaReal2 = calculo.selecionaFaixa('2000').numero;
            const faixaEsperada2 = 2;
            assert.equal(faixaReal2, faixaEsperada2);
    
            const faixaReal3 = calculo.selecionaFaixa('4000').numero;
            const faixaEsperada3 = 3;
            assert.equal(faixaReal3, faixaEsperada3);
        });
    
        it('Deve preparar o valor do cálculo', () => {
            const valorReal1 = calculo.preparaValorCalculo('1000,10');
            const valorEsperado1 = '1000.10';
            assert.equal(valorReal1, valorEsperado1);
        });

        it('Deve calcular o INSS', () => {
            const valorReal1 = calculo.calculaINSS('1000');
            const valorEsperado1 = {
                aliquota: 8,
                faixa: 1,
                salario: '1000',
                valor: 80
            };
            assert.equal(valorReal1.valor, valorEsperado1.valor);

            const valorReal2 = calculo.calculaINSS('2000');
            const valorEsperado2 = {
                aliquota: 9,
                faixa: 2,
                salario: '2000',
                valor: 180
            };
            assert.equal(valorReal2.valor, valorEsperado2.valor);

            const valorReal3 = calculo.calculaINSS('6200');
            const valorEsperado3 = {
                aliquota: 11,
                faixa: 4,
                salario: '6200',
                valor: 671.1176999999999
            };
            assert.equal(valorReal3.valor, valorEsperado3.valor);
        });
    });

    describe('Cálculo Novo INSS', () => {
    
        it('Deve selecionar a faixa nova', () => {
            const faixaReal1 = calculo.selecionaFaixaNova('1000').numero;
            const faixaEsperada1 = 1;
            assert.equal(faixaReal1, faixaEsperada1);
    
            const faixaReal2 = calculo.selecionaFaixaNova('2000').numero;
            const faixaEsperada2 = 2;
            assert.equal(faixaReal2, faixaEsperada2);
    
            const faixaReal3 = calculo.selecionaFaixaNova('4000').numero;
            const faixaEsperada3 = 4;
            assert.equal(faixaReal3, faixaEsperada3, "Tem que ser faixa 4");
        });
    
        /*

        it('Deve calcular o INSS', () => {
            const valorReal1 = calculo.calculaINSS('1000');
            const valorEsperado1 = {
                aliquota: 8,
                faixa: 1,
                salario: '1000',
                valor: 80
            };
            assert.equal(valorReal1.valor, valorEsperado1.valor);

            const valorReal2 = calculo.calculaINSS('2000');
            const valorEsperado2 = {
                aliquota: 9,
                faixa: 2,
                salario: '2000',
                valor: 180
            };
            assert.equal(valorReal2.valor, valorEsperado2.valor);

            const valorReal3 = calculo.calculaINSS('6200');
            const valorEsperado3 = {
                aliquota: 11,
                faixa: 4,
                salario: '6200',
                valor: 671.1176999999999
            };
            assert.equal(valorReal3.valor, valorEsperado3.valor);
        });
        */
    });

});

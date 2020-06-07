const assert = require('assert');
const util = require('../src/js/util');

describe('Ferramentas Gerais', function() {
    
    describe('preparaValorCalculo', function() {

        it('Prepara o valor R$1000,00 para cálculo', function() {
            const expected = '1000.00';
            const actual = util.preparaValorCalculo('1000,00');

            assert.equal(actual, expected);
        });

        it('Prepara o valor R$250,45 para cálculo', function() {
            const expected = '250.45';
            const actual = util.preparaValorCalculo('250,45');

            assert.equal(actual, expected);
        });

        it('Prepara o valor R$798,91 para cálculo', function() {
            const expected = '798.91';
            const actual = util.preparaValorCalculo('798,91');

            assert.equal(actual, expected);
        });

    });

    describe('cortarCasasDecimais', function() {

        it('Corta as casas de 78.375', function() {
            const expected = 78.37;
            const actual = util.cortarCasasDecimais(78.375);

            assert.equal(actual, expected);
        });

        it('Corta as casas de 94.0131', function() {
            const expected = 94.01;
            const actual = util.cortarCasasDecimais(94.0131);

            assert.equal(actual, expected);
        });

        it('Corta as casas de 125.3748', function() {
            const expected = 125.37;
            const actual = util.cortarCasasDecimais(125.3748);

            assert.equal(actual, expected);
        });

        it('Corta as casas de 415.331', function() {
            const expected = 415.33;
            const actual = util.cortarCasasDecimais(415.331);

            assert.equal(actual, expected);
        });

    });

});

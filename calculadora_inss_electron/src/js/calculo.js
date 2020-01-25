const calculo = {
    resultado: {
        salario: 0,
        aliquota: 0,
        faixa: 0,
        valor: 0,
    },
    
    faixas: [
        [ 
            { 
                vinicial: 0, 
                vfinal: 1830.30, 
                aliquota: 8,
                numero: 1
            }, { 
                vinicial: 1830.31, 
                vfinal: 3050.53, 
                aliquota: 9,
                numero: 2
            },{ 
                vinicial: 3050.54, 
                vfinal: 6101.06, 
                aliquota: 11,
                numero: 3
            },
            { 
                vinicial: 6101.07,
                vfinal: 99999999,
                aliquota: 11,
                numero: 4
            }
        ],
        [
            { 
                vinicial: 0,
                vfinal: 1039.00,
                aliquota: 7.5,
                numero: 1
            }, { 
                vinicial: 1039.01,
                vfinal: 2089.60,
                aliquota: 9,
                numero: 2
            }, { 
                vinicial: 2089.61,
                vfinal: 3134.40,
                aliquota: 12,
                numero: 3
            }, { 
                vinicial: 3134.40,
                vfinal: 6101.06,
                aliquota: 14,
                numero: 4
            }
        ]
    ],

    selecionaFaixa: (salario) => {
        let faixaSelecionada = 0;

        calculo.faixas[0].forEach(faixa => {
            if (salario >= faixa.vinicial 
                    && salario <= faixa.vfinal) {
                faixaSelecionada = faixa;
            }
        });

        return faixaSelecionada;
    },

    selecionaFaixaNova: (salario) => {
        let faixaSelecionada = 0;

        calculo.faixas[1].forEach(faixa => {
            if (salario >= faixa.vinicial 
                    && salario <= faixa.vfinal) {
                faixaSelecionada = faixa;
            }
        });

        return faixaSelecionada;
    },

    preparaValorCalculo: (valor) => {
        return valor.replace(',', '.');    
    },

    calculaAliquotaReal: (salario, valor) => {
        return valor * 100 / salario;
    },

    limpaValores: () => {
        calculo.resultado.salario = 0;
        calculo.resultado.valor = 0;
        calculo.resultado.aliquota = 0;
        calculo.resultado.faixa = 0;
    },

    calculaINSS: (salario) => {
        calculo.limpaValores();
        const salarioPreparado = calculo.preparaValorCalculo(salario);
        calculo.resultado.salario = salarioPreparado;
    
        const faixa = calculo.selecionaFaixa(salarioPreparado);
    
        if (faixa.numero < 4) {
            calculo.resultado.valor = salarioPreparado * faixa.aliquota / 100;
            calculo.resultado.aliquota = faixa.aliquota;
            calculo.resultado.faixa = faixa.numero;
        } else {
            calculo.resultado.salario = faixa.vinicial;
            calculo.resultado.valor = faixa.vinicial * faixa.aliquota / 100;
            calculo.resultado.aliquota = faixa.aliquota;
            calculo.resultado.faixa = faixa.numero;
        }
    
        return calculo.resultado;
    },

    calculaNovoINSS: (salario) => {
        calculo.limpaValores();
        const faixaSelecionada = calculo.selecionaFaixaNova(salario);
        
        calculo.faixas[1].forEach(faixa => {
            if (faixa.numero <= faixaSelecionada.numero) {
                let diferenca = 0;
                if (salario > faixa.vfinal) {
                    diferenca = faixa.vfinal - faixa.vinicial;
                } else {
                    diferenca = salario - faixa.vinicial;
                }
                calculo.resultado.valor += diferenca * faixa.aliquota / 100;
                
                calculo.resultado.salario = salario;
                calculo.resultado.aliquota = calculo
                                                .calculaAliquotaReal(salario, 
                                                calculo.resultado.valor);
                calculo.resultado.faixa = faixa.numero;
            }
        });

        return calculo.resultado;
    }
};

module.exports = calculo;
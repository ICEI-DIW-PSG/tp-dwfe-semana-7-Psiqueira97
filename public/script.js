// dado 1
var nome = prompt('Digite seu nome:');

// while renda
var renda = Number(prompt('Olá ' + nome + ', qual sua renda mensal?'));

while (isNaN(renda) || renda <= 0) {
    renda = Number(prompt('Valor inválido! Por favor, digite sua renda usando apenas números:'));
}

//despesas
var qtdDespesas = Number(prompt('Quantas despesas você quer cadastrar? (Mínimo 1, Máximo 5)'));

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// testando
console.log('Nome: ' + nome);
console.log('Renda: ' + renda);
console.log('Quantidade de despesas ajustada: ' + qtdDespesas);

// for lancar despesas
var totalDespesas = 0;

// for ate qtdDespesas
for (var i = 1; i <= qtdDespesas; i = i + 1) {
    var valorDespesa = Number(prompt('Digite o valor da despesa ' + i + ':'));
    
    // valida
    while (isNaN(valorDespesa) || valorDespesa < 0) {
        valorDespesa = Number(prompt('Valor inválido! Digite o valor da despesa ' + i + ' novamente:'));
    }
    
    // soma igual c#
    totalDespesas = totalDespesas + valorDespesa;
}

// if else padrão
var sobra = renda - totalDespesas;
var mensagemClassificacao = '';

if (totalDespesas > renda) {
    mensagemClassificacao = 'Atenção: você gastou mais do que ganhou.';
} else {
    //30% >:(
    if (sobra >= (renda * 0.3)) {
        mensagemClassificacao = 'Ótimo: boa margem de sobra.';
    } else {
        mensagemClassificacao = 'Ok: dá para melhorar a sobra.';
    }
}

// printf
var resumo = '--- RESUMO DO ORÇAMENTO ---\n' +
             'Usuário: ' + nome + '\n' +
             'Renda: R$ ' + renda.toFixed(2) + '\n' +
             'Total de Despesas: R$ ' + totalDespesas.toFixed(2) + '\n' +
             'Sobra: R$ ' + sobra.toFixed(2) + '\n' +
             'Avaliação: ' + mensagemClassificacao;

// Mostra o alerta na tela
alert(resumo);

// Organiza console
console.log('---------------------------');
console.log(resumo);
console.log('---------------------------');
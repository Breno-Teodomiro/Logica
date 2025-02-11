// 1. Exibir o valor da variável nome
let nome = "Breno";
console.log(nome);

// 2. Exibir idade e altura
let idade = 25;
let altura = 1.75;
console.log("Idade:", idade, "Altura:", altura);

// 3. Calcular o preço com desconto
let preco = 50;
let desconto = 0.2;
let precoComDesconto = preco * (1 - desconto);
console.log("Preço com desconto:", precoComDesconto);

// 4. Verificar a temperatura
let temperatura = 30;
if (temperatura > 25) {
    console.log("Está calor!");
} else {
    console.log("Está fresco!");
}

// 5. Verificar se a pessoa é maior de idade
idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 6. Verificar a nota do aluno
let nota = 8; // Atribua um valor entre 0 e 10
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 7. Verificar se dois números são iguais
let numero1 = 10;
let numero2 = 20;
if (numero1 === numero2) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}

// 8. Exibir mensagem com nome e idade usando concatenação
nome = "João";
idade = 30;
console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");

// 9. Loop que imprime números de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10. Loop que pede ao usuário um número até ele digitar 5
let numero;
do {
    numero = prompt("Digite um número:");
} while (numero != 5);

// 11. Loop que imprime a tabuada do número 7 de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i);
}

// 12. Loop que exibe todos os números pares de 0 a 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 13. Função que calcula a área de um círculo
function calcularAreaCirculo(raio) {
    const pi = 3.14159;
    return pi * raio * raio;
}
let raio = 5;
console.log("Área do círculo:", calcularAreaCirculo(raio));

// 14. Programa simples que calcula a soma de dois números
let numeroA = 15;
let numeroB = 25;
let soma = numeroA + numeroB;
console.log("A soma de", numeroA, "e", numeroB, "é:", soma);

// 15. Refatorando o código para ser mais legível
function somarDoisNumeros(x, y) {
    return x + y;
}
let resultado = somarDoisNumeros(10, 20);
console.log("A soma é:", resultado);

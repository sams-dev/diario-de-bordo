//Tipos de Dados

/* number */ let numero = 42.5687;
//metodos de number
1.//Conversão e Formatação - Usados para converter números em strings ou formatá-los.
number.toString() //Converte o número em uma string.
    console.log(typeof numero.toString(), "Número como string:", numero.toString());

number.toFixed(digits) //Retorna uma string representando o número com um número fixo de casas decimais (digits).
    console.log("Número com 4 casas decimais:", numero.toFixed(4)); 

number.toPrecision(precision) //Retorna uma string representando o número com a precisão especificada (número total de dígitos).
    console.log("Número com precisão de 2 dígitos:", numero.toPrecision(2));    

2.//Operações Matemáticas - Usados para realizar operações matemáticas comuns.
Math.abs(number) //Retorna o valor absoluto do número.
Math.ceil(number) //Arredonda o número para cima para o inteiro mais próximo.
Math.floor(number) //Arredonda o número para baixo para o inteiro mais próximo.
Math.round(number) //Arredonda o número para o inteiro mais próximo.
Math.max(num1, num2) //Retorna o maior valor entre os números fornecidos.
Math.min(num1, num2) //Retorna o menor valor entre os números fornecidos.

3.//Geração de Números Aleatórios - Usados para gerar números aleatórios.
Math.random() //Retorna um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).
Math.floor(Math.random() * (max - min + 1)) + min //Gera um número inteiro aleatório entre min e max (inclusive).

4.//Outros Métodos Úteis
isNaN(value) //Verifica se o valor é NaN (Not-a-Number). Retorna true ou false.
parseInt(string, radix) //Converte uma string em um número inteiro na base especificada (radix).
parseFloat(string) //Converte uma string em um número de ponto flutuante.

5.//Métodos Estáticos - Usados para verificar propriedades de números.
Number.isInteger(value) //Verifica se o valor é um número inteiro. Retorna true ou false.
Number.isFinite(value) //Verifica se o valor é um número finito. Retorna true ou false.
Number.isNaN(value) //Verifica se o valor é NaN. Retorna true ou false.
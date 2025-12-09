//Tipos de Dados

/* boolean */ let booleano = true;
//manipulação de booleanos por meio de:
1. //Operadores Lógicos - Usados para combinar ou inverter valores booleanos.
//AND (&&) - Retorna true se ambos os operandos forem true.
let andResult = true && false; 
console.log("Resultado do AND (true && false):", andResult);
//OR (||) - Retorna true se pelo menos um dos operandos for true.
let orResult = true || false; 
console.log("Resultado do OR (true || false):", orResult);
//NOT (!) - Inverte o valor booleano.
let notResult = !true; 
console.log("Resultado do NOT (!true):", notResult);

2. //Comparações - Usados para comparar valores e retornar booleanos.
let isEqual = (5 == '5'); // Igualdade solta (true)
let isStrictEqual = (5 === '5'); // Igualdade estrita (false)   
console.log("5 == '5':", isEqual);
console.log("5 === '5':", isStrictEqual);
let isGreater = (10 > 5); // Maior que (true)
let isLess = (5 < 10); // Menor que (true)
console.log("10 > 5:", isGreater);
console.log("5 < 10:", isLess);

3. //Uso em Condicionais - Usados para controlar o fluxo do programa com base em valores booleanos.
let idade = 20;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

4. //Conversão de Booleanos - Usados para converter valores em booleanos ou vice-versa.
Boolean(value) //Converte um valor para booleano. Valores "falsy" (0, "", null, undefined, NaN, false) retornam false; todos os outros retornam true.
    console.log("Convertendo 0 para booleano:", Boolean(0));

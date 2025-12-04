// É um espaço alocado na memória para armazenar dados.

//Variáveis
let nome = "Samuel"; // variável que pode ser reatribuída
const idade = 23; // variável constante que não pode ser reatribuída
var cidade = "Porto Alegre"; // variável com escopo global ou de função (não recomendado usar var atualmente)
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);

//Tipos de Dados
/* string */ let texto = "Olá, Mundo!";
/* número */ let numero = 42; 
/* booleano */ let booleano = true;
/* array */ let lista = [1, 2, 3, 4, 5];    
/* objeto */ let objeto = { nome: "Samuel", idade: 23 };  

//typeof
console.log(typeof numero, "Número:", numero);
console.log(typeof texto, "Texto:", texto);
console.log(typeof booleano, "Booleano:", booleano);
console.log(typeof lista, "Lista:", lista);
console.log(typeof objeto, "Objeto:", objeto);


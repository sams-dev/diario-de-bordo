// JavaScript é uma linguagem de programação interpretada, leve, de alto nível com tipagem dinâmica e multiparadigma (funcional e de classe), amplamente utilizada para desenvolvimento web. 
// Ela permite a criação de páginas web dinâmicas e interativas, funcionando tanto no lado do cliente (navegador) quanto no lado do servidor (com Node.js).

//Variáveis
let nome = "Samuel"; // variável que pode ser reatribuída
const idade = 23; // variável constante que não pode ser reatribuída
var cidade = "Porto Alegre"; // variável com escopo global ou de função (não recomendado usar var atualmente)
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);

//Tipos de Dados
let numero = 42; // número
let texto = "Olá, Mundo!"; // string
let booleano = true; // booleano
let lista = [1, 2, 3, 4, 5]; // array
let objeto = { nome: "Samuel", idade: 23 }; // objeto
console.log(typeof numero, "Número:", numero);
console.log(typeof texto, "Texto:", texto);
console.log(typeof booleano, "Booleano:", booleano);
console.log(typeof lista, "Lista:", lista);
console.log(typeof objeto, "Objeto:", objeto);
//Funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Samuel"));

//Arrow Function
const soma = (a, b) => a + b;
console.log("Soma:", soma(5, 3));

//Condicionais
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//Laços de Repetição
for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}
let contador = 0;
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}

//Manipulação de Arrays
let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
console.log("Frutas:", frutas);
frutas.forEach(fruta => console.log("Fruta:", fruta));
let frutasFiltradas = frutas.filter(fruta => fruta.startsWith("l"));
console.log("Frutas filtradas:", frutasFiltradas);
let frutasMapeadas = frutas.map(fruta => fruta.toUpperCase());
console.log("Frutas mapeadas:", frutasMapeadas);

//Manipulação de Objetos
objeto.sobrenome = "Silva";
console.log("Objeto atualizado:", objeto);
for (let chave in objeto) {
    console.log(`${chave}: ${objeto[chave]}`);
}
let chaves = Object.keys(objeto);
console.log("Chaves do objeto:", chaves);
let valores = Object.values(objeto);
console.log("Valores do objeto:", valores);
let entradas = Object.entries(objeto);
console.log("Entradas do objeto:", entradas);

//Tratamento de Erros
try {
    let resultado = numero / 0; 
    if (!isFinite(resultado)) {
        throw new Error("Divisão por zero não é permitida.");
    }
} catch (error) {
    console.error("Erro:", error.message);
}
finally {
    console.log("Bloco finally executado.");
}   

//Promises
let promessa = new Promise((resolve, reject) => {
    let sucesso = true;
    if (sucesso) {
        resolve("A promessa foi cumprida!");
    } else {
        reject("A promessa foi rejeitada.");
    }
}); 
promessa.then(mensagem => {
    console.log(mensagem);
}).catch(erro => {
    console.error(erro);
});

//Async/Await
async function executarAsync() {
    try {
        let mensagem = await promessa;
        console.log("Async/Await:", mensagem);
    } catch (erro) {
        console.error(erro);
    }
}  
executarAsync();  

//Manipulação do DOM (Document Object Model)
document.body.style.backgroundColor = "#f0f0f0";
let titulo = document.createElement("h1");
titulo.textContent = "Olá, Mundo!";
document.body.appendChild(titulo);  
titulo.addEventListener("click", () => {
    alert("Título clicado!");
}); 

//Eventos
window.addEventListener("resize", () => {
    console.log("A janela foi redimensionada.");
}); 
document.addEventListener("keydown", (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
});

//Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log("Dados do Fetch:", data))
    .catch(error => console.error("Erro no Fetch:", error));

//JSON (JavaScript Object Notation)
let jsonString = '{"nome": "Samuel", "idade": 23}';
let jsonObjeto = JSON.parse(jsonString);
console.log("Objeto JSON:", jsonObjeto);
let novaJsonString = JSON.stringify(jsonObjeto);
console.log("String JSON:", novaJsonString);    

//Módulos (ES6)
// Suponha que temos um arquivo chamado 'modulo.js' com o seguinte conteúdo:
// export const saudacaoModulo = (nome) => `Olá do módulo, ${nome}!`;   
// import { saudacaoModulo } from './modulo.js';
// console.log(saudacaoModulo("Samuel"));
//Observação: A parte de módulos requer um ambiente que suporte ES6 modules, como navegadores modernos ou Node.js com configuração adequada.

//Classes (ES6)
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const pessoa1 = new Pessoa("Samuel", 23);
console.log("Pessoa:", pessoa1);    
pessoa1.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}
pessoa1.apresentar();   

//Herança (ES6)
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
}   
const estudante1 = new Estudante("Ana", 21, "Engenharia");
console.log("Estudante:", estudante1);  
estudante1.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
}
estudante1.apresentar();

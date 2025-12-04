//Tipos de Dados

/* string */ let texto = "Olá, Mundo!";
//metodos de string
 1. //Busca e Verificação - Usados para encontrar substrings e verificar o conteúdo da string.
 string.indexOf(substring) //Retorna o índice da primeira ocorrência da substring. Retorna -1 se não for encontrada.
 string.includes(substring) //Verifica se a string contém a substring. Retorna true ou false.
 string.startsWith(substring) //Verifica se a string começa com a substring. Retorna true ou false.
 string.endsWith(substring) //Verifica se a string termina com a substring. Retorna true ou false.
 string.search(regexp) //Busca por uma correspondência usando uma expressão regular (regexp) e retorna o índice da primeira correspondência ou -1.
 .length //É uma propriedade que retorna o número de caracteres na string.
 
 2. //Extração e Substituição - Usados para tirar partes da string ou alterar seu conteúdo.
 string.slice(start, end) //Extrai uma seção da string (do start até o end, que não é inclusivo) e retorna a nova string
 string.substring(start, end) //Semelhante ao slice(), mas trata argumentos negativos como zero.
 string.replace(search, replace) //Substitui a primeira ocorrência de search por replace.
 string.replaceAll(search, replace) //Substitui todas as ocorrências de search por replace (Introduzido no ES2021).
 
 3. //Formatação e Conversão - Usados para padronizar a string ou convertê-la em um Array.
 string.toUpperCase() //Converte todos os caracteres para maiúsculas.
 string.toLowerCase() //Converte todos os caracteres para minúsculas.
 string.trim() //Remove espaços em branco do início e do fim da string.
 string.split(separator) //Divide a string em um array de substrings usando o separator especificado.
 string.concat(str2) //Junta a string atual com outra(s) string(s). O operador + é geralmente preferido.
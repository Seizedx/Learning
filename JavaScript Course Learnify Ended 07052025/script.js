/////////////////////////////// NEW PAGE ////////////////////////////////////////////////////////////////

                                // Abrindo outra page direto no js
                                // const returnButton = document.createElement('button');
                                // returnButton.textContent = 'Return';
                                // returnButton.style.padding = '10px';
                                // document.body.appendChild(returnButton);

                                // returnButton.addEventListener('click', () => {
                                //   window.location.href = 'newPage.html';
                                // });

                                //Abrindo outra page no html

                                // <button class="button" onclick="window.location.href='index.html'">Return to Index</button>

/////////////////////////////// STYLE UNIVERSAL NO JS ////////////////////////////////////////////////
                                // const style = document.createElement('style');
                                // style.textContent = `
                                //   * {
                                //     margin: 0;
                                //     padding: 0;
                                //     box-sizing: border-box;
                                //   }
                                // `;
                                // document.head.appendChild(style);                                

/////////////////////////////// CONSOLE //////////////////////////////////////////////////////////////////

                                // .log(...args): Exibe mensagem genérica no console.
                                // .info(...args): Exibe mensagem informativa (similar a .log).
                                // .warn(...args): Exibe mensagem de aviso (estilizada como alerta).
                                // .error(...args): Exibe mensagem de erro (estilizada como erro).
                                // .debug(...args): Exibe mensagem de depuração (pode ser filtrada).
                                // .trace(): Exibe rastreamento da pilha de chamadas.
                                // .dir(obj): Exibe objeto interativo no console.
                                // .dirxml(node): Exibe representação XML de um nó DOM.
                                // .table(data): Exibe dados em formato de tabela.
                                // .group(...args): Inicia grupo de mensagens (colapsável).
                                // .groupCollapsed(...args): Inicia grupo de mensagens colapsado.
                                // .groupEnd(): Finaliza grupo de mensagens.
                                // .clear(): Limpa o console.
                                // .count(label): Conta quantas vezes o rótulo foi chamado.
                                // .countReset(label): Reseta contador do rótulo.
                                // .time(label): Inicia temporizador com rótulo.
                                // .timeLog(label): Registra tempo decorrido do temporizador.
                                // .timeEnd(label): Finaliza temporizador e registra tempo total.
                                // .assert(condition, ...args): Exibe mensagem de erro se condição for false.
                                // .profile(label): Inicia perfil de desempenho (depende do ambiente).
                                // .profileEnd(label): Finaliza perfil de desempenho.

/////////////////////////////// ALERT ////////////////////////////////////////////////////////////////////

                                // .alert(message): Exibe mensagem com botão "OK".
                                // .confirm(message): Exibe mensagem com botões "OK" e "Cancelar", retorna true/false.
                                // .prompt(message, defaultValue): Exibe mensagem com campo de entrada, retorna texto ou null.

                            // Observações

                                // Contexto: Métodos do objeto Window (ex.: window.alert), disponíveis em navegadores.
                                // Retorno:
                                // .alert: Não retorna valor (undefined).
                                // .confirm: Retorna true (OK) ou false (Cancelar).
                                // .prompt: Retorna string inserida ou null (Cancelar).
                            
/////////////////////////////// OBJECTS TYPES ////////////////////////////////////////////////////////////

                                // Object: Objeto genérico para armazenar pares chave-valor.
                                // Array: Coleção ordenada de elementos acessados por índice.
                                // Function: Objeto executável que representa uma função.
                                // String: Wrapper para strings primitivas, com métodos de manipulação.
                                // Number: Wrapper para números, com métodos de formatação.
                                // Boolean: Wrapper para valores booleanos (true/false).
                                // Date: Representa datas e horas, com métodos de manipulação.
                                // RegExp: Representa expressões regulares para padrões.
                                // Map: Coleção de pares chave-valor, com chaves de qualquer tipo.
                                // Set: Coleção de valores únicos, sem duplicatas.
                                // WeakMap: Como Map, mas com chaves apenas de objetos e garbage collection.
                                // WeakSet: Como Set, mas com valores apenas de objetos e garbage collection.
                                // ArrayBuffer: Buffer de bytes para dados binários.
                                // TypedArray: Vista tipada de ArrayBuffer (ex.: Int32Array, Float64Array).
                                // DataView: Interface para manipular ArrayBuffer com diferentes tipos.
                                // Promise: Representa resultado assíncrono (pendente, resolvido ou rejeitado).
                                // Symbol: Valor único usado como chave de propriedade.
                                // Error: Representa erros (ex.: TypeError, ReferenceError).
                                // JSON: Objeto para parsing e stringificação de JSON.
                                // Math: Objeto com métodos e constantes matemáticas.
                                // Window: Representa a janela do navegador (global no browser).
                                // Document: Representa o documento DOM da página.
                                // Element: Representa elementos HTML/SVG no DOM (ex.: HTMLElement).
                                // Node: Base para nós do DOM (ex.: elementos, texto).
                                // Event: Representa eventos do DOM (ex.: click, keypress).
                                // Custom: Objetos criados pelo usuário com {} ou classes.

                            // Observações

                                // Nativos: Object, Array, Function, etc., são definidos pela ECMAScript.
                                // Wrappers: String, Number, Boolean encapsulam primitivos, mas são raramente usados diretamente (ex.: new String("texto")).
                                // DOM: Window, Document, Element, Node são específicos de navegadores (WHATWG).
                                // Coleções: Map, Set, WeakMap, WeakSet são estruturas modernas (ES6+).
                                // Binários: ArrayBuffer, TypedArray, DataView são usados para dados binários.
                                // Personalizados: Criados com objetos literais ({}), Object.create, ou classes (class).
                                // Suporte: Todos são suportados em ambientes modernos (ES5+ para nativos, ES6+ para Map, Set, etc.).
                            
////////////////////////////////// MATH METHODS /////////////////////////////////////////////////////////

                            // 1. Constantes

                                // .E: Constante de Euler (≈2.718).
                                // .LN2: Logaritmo natural de 2 (≈0.693).
                                // .LN10: Logaritmo natural de 10 (≈2.303).
                                // .LOG2E: Logaritmo de E na base 2 (≈1.443).
                                // .LOG10E: Logaritmo de E na base 10 (≈0.434).
                                // .PI: Constante π (≈3.14159).
                                // .SQRT1_2: Raiz quadrada de 1/2 (≈0.707).
                                // .SQRT2: Raiz quadrada de 2 (≈1.414).

                            // 2. Aritméticos

                                // .abs(x): Retorna o valor absoluto de x.
                                // .ceil(x): Arredonda x para o inteiro maior mais próximo.
                                // .floor(x): Arredonda x para o inteiro menor mais próximo.
                                // .round(x): Arredonda x para o inteiro mais próximo.
                                // .trunc(x): Remove a parte decimal de x, retornando o inteiro.
                                // .sign(x): Retorna o sinal de x (-1, 0, 1).
                                // .max(...values): Retorna o maior valor entre os argumentos.
                                // .min(...values): Retorna o menor valor entre os argumentos.
                                // .pow(base, exponent): Calcula base elevado a exponente.
                                // .sqrt(x): Retorna a raiz quadrada de x.
                                // .cbrt(x): Retorna a raiz cúbica de x.

                            // 3. Trigonométricos

                                // .sin(x): Retorna o seno de x (em radianos).
                                // .cos(x): Retorna o cosseno de x (em radianos).
                                // .tan(x): Retorna a tangente de x (em radianos).
                                // .asin(x): Retorna o arco-seno de x (em radianos).
                                // .acos(x): Retorna o arco-cosseno de x (em radianos).
                                // .atan(x): Retorna o arco-tangente de x (em radianos).
                                // .atan2(y, x): Retorna o ângulo entre o eixo x e o ponto (x, y).

                            // 4. Logarítmicos e Exponenciais

                                // .exp(x): Retorna E elevado a x.
                                // .expm1(x): Retorna E elevado a x menos 1.
                                // .log(x): Retorna o logaritmo natural de x.
                                // .log1p(x): Retorna o logaritmo natural de 1 + x.
                                // .log2(x): Retorna o logaritmo de x na base 2.
                                // .log10(x): Retorna o logaritmo de x na base 10.

                            // 5. Aleatórios

                                // .random(): Gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).

                            // 6. Outros

                                // .clz32(x): Conta os zeros à esquerda em um número de 32 bits.
                                // .fround(x): Converte x para o número de ponto flutuante de 32 bits mais próximo.
                                // .hypot(...values): Calcula a raiz quadrada da soma dos quadrados dos argumentos.
                                // .imul(x, y): Multiplica x e y como inteiros de 32 bits.

// var x = [111, 200, 300, 400, 500, 600, 666];
// var y = (100);
// var a = 100.55363;
// var b = Math.ceil(a); // arredonda o valor para o integer maior mais próximo
// var c = Math.floor(a); // arredonda o valor para o integer menor mais próximo
// var d = Math.round(a); // arredonda o valor para o integer mais próximo
// var e = Math.trunc(a); // remove a parte fracionária
// var f = Math.sign(a); // arredonda o valor para o integer maior mais próximo
// var g = Math.max(...x); // retorna o maior valor entre os elementos
// var h = Math.min(...x); // retorna o menor valor entre os elementos
// var i = Math.pow(a, 3).toFixed(5); // Calcula base elevado a exponente
// var j = Math.sqrt(a).toFixed(5); // Calcula a raiz quadrada
// var k = Math.cbrt(a).toFixed(5); // Calcula a raiz cúbica


// document.write( "a: " + a + ", Value: " + a + "<br>");
// document.write( "b: Math.ceil(a)"  + ", Value: " + b + ", para Maior Integer<br>");
// document.write( "c: Math.floor(a)"  + ", Value: " + c + ", para Menor Integer<br>");
// document.write( "d: Math.round(a)"  + ", Value: " + d + ", para Integer Mais Próximo<br>");
// document.write( "e: Math.trunc(a)"  + ", Value: " + e + ", para Remover a Parte Fracionária<br>");
// document.write( "f: Math.sign(a)"  + ", Value: " + f + ", para Mostrar o Sinal do Valor (-1, 0, 1)<br>");
// document.write( "g: Math.max(...x)"  + ", Value: " + g + ", para o Maior Valor Entre os Elementos<br>");
// document.write( "h: Math.min(...x)"  + ", Value: " + h + ", para o Menor Valor Entre os Elementos<br>");
// document.write( "i: Math.pow(a, 3)"  + ", Value: " + i + ", para a base elevado a exponente<br>");
// document.write( "j: Math.sqrt(a)"  + ", Value: " + j + ", para a a raiz quadrada<br>");
// document.write( "k: Math.cbrt(a)"  + ", Value: " + k + ", para a a raiz cúbica<br>");

///////////////////////////////// STRING COMMANDS /////////////////////////////////////////////////////

                            // 1. Acessar Caracteres/Substrings

                                // .length: Conta os caracteres da string.
                                // .charAt(index): Pega o caractere no índice.
                                // .charCodeAt(index): Código UTF-16 do caractere no índice.
                                // .codePointAt(index): Código Unicode do caractere no índice.
                                // .slice(start, end): Corta parte da string de start a end.
                                // .substring(start, end): Corta parte da string, sem índices negativos.
                                // .substr(start, length): Corta length caracteres de start (obsoleto).
                                // .at(index): Pega caractere no índice, aceita negativos.
                        
                            //2. Pesquisar
                        
                                // .indexOf(searchValue, fromIndex): Primeiro índice de searchValue ou -1.
                                // .lastIndexOf(searchValue, fromIndex): Último índice de searchValue ou -1.
                                // .includes(searchValue, fromIndex): Verifica se searchValue existe (true/false).
                                // .startsWith(searchValue, position): Checa se começa com searchValue.
                                // .endsWith(searchValue, length): Checa se termina com searchValue.
                                // .match(regexp): Retorna correspondências de regex ou null.
                                // .matchAll(regexp): Retorna todas as correspondências de regex.
                                // .search(regexp): Índice da primeira correspondência de regex ou -1.
                        
                            //3. Modificar
                        
                                // .toLowerCase(): Converte para minúsculas.
                                // .toUpperCase(): Converte para maiúsculas.
                                // .toLocaleLowerCase(locale): Minúsculas com regras de localidade.
                                // .toLocaleUpperCase(locale): Maiúsculas com regras de localidade.
                                // .trim(): Remove espaços do início e fim.
                                // .trimStart(): Remove espaços do início.
                                // .trimEnd(): Remove espaços do fim.
                                // .replace(searchValue, newValue): Substitui primeira ocorrência.
                                // .replaceAll(searchValue, newValue): Substitui todas as ocorrências.
                                // .concat(...strings): Junta strings.
                                // .padStart(targetLength, padString): Preenche início até targetLength.
                                // .padEnd(targetLength, padString): Preenche fim até targetLength.
                                // .repeat(count): Repete a string count vezes.
                                // .normalize(form): Normaliza string Unicode.
                        
                            //4. Dividir
                        
                                // .split(separator, limit): Divide em array com base em separator.
                        
                            //5. Outros
                        
                                // .localeCompare(compareString, locales, options): Compara strings para ordenação.
                                // .toString(): Retorna a string.
                                // .valueOf(): Retorna valor primitivo.
                                // .raw(template, ...substitutions): Processa template literal (estático).

// document.write(`Testing String Methods<br>
//     <input type="text" id="inputText" placeholder="Input word here: "></input><br>
//     <button id="testButton">Calculate</button>`);

// var a = document.getElementById("inputText");
// var c = document.getElementById("testButton").addEventListener("click", calculate);

// function calculate () {
    // var b = a.value.trim().length; // mostra quantas letras
    // var b = a.value.trim().toLowerCase(); // muda para letra minuscula
    // var b = a.value.trim().toUpperCase(); // muda para letra maiuscula
    // var b = a.value.match(/he/g); // procura algo, no caso, procurando por he globally e transforma em array
    // var b = a.value.indexOf("he"); // procura algo, e retorna o primeiro valor se achar, se não achar retorna -1
    // var b = a.value.lastIndexOf("4"); // procura algo, e retorna o ultimo valor se achar, se não achar retorna -1
    // var b = a.value.replace("hello", "world"); // substitui o primeiro pelo segundo
    // var b = a.value.trim(); // remove todos espaços externos
    // var b = a.value.charAt(2); // mostra qual character corresponde ao valor solicitado
    // var b = a.value.charCodeAt(1); // mostra valor em decimal do item character em ascii
    // var b = a.value.charCodeAt(1); // mostra valor em decimal do item character em ascii
    // var b = a.value.split("he"); // transforma em array a partir de split
    // var b = a.value.split("he"); // transforma em array a partir de split
    // var b = a.value.repeat(20); // repete quantas vezes solicitado
    // var b = a.value.slice(3); // remove tudo antes do valor solicitado, se colocar assim vai de: até: (3, 5)
    // var b = a.value.substr(3); // funciona quase igual o slice, mas conta o ultimo valor
    // var b = a.value.toString(); // transforma em string

//     if (a.value == "")  {
//         alert("Enter a valid Input");
//     } else {
//         document.write(b + "<br>");
//     }
// }

// var a = 'Damn,';
// var b = ' You Suck';
// var c = b.charAt(5); // mostra o que está no local solicitado
// var d = b.charCodeAt(4); // mostra o charcode do local solicitado
// var e = a.concat(b); // junta strings
// var f = b.endsWith('1'); // pergunta se termina com o solicitado
// var g = b.includes('c'); // pergunta se inclui o solicitado
// var h = b.indexOf('u'); // indica o primeiro index do solicitado
// var i = b.lastIndexOf('u'); // indica o ultimo index do solicitado
// var j = b.match(/u/g); // procura por valores iguais globally e transforma em array
// var k = b.repeat(5); // repete quantas vezes solicitado
// var l = b.replace('you', "we"); // substitui o primeiro pelo segundo
// var m = b.replaceAll('u', '(this has been changed)'); // substitui todos primeiros pelo segundo
// var n = b.search('u'); // mostra quantos solicitados foram encontrados
// var o = b.slice(4, 7); // mostra o que estiver entre os valores de index
// var p = b.split(' '); // separa e transforma em array onde for solicitado
// var q = b.startsWith('you'); // mostra se a var começa com o solicitado
// var r = b.substring(4, 7); // extrai os characteres entre dois index
// var s = b.toLowerCase(); // transforma em letra minuscula
// var t = b.toUpperCase(); // transforma em letra maiuscula
// var u = b.trim(); // remove os espaços antes e depois da var
// var v = b.trimStart(); // remove os espaços de antes da var
// var w = b.trimEnd(); // remove os espaços de depois da var
// var x = b.padStart(20, 'x'); // adiciona x quantos index solicitados antes do valor
// var y = b.padEnd(20, 'x'); // adiciona x quantos index solicitados depois do valor
// var z = b.localeCompare('z'); // compara a letra solicitado com a letra ordenada do valor -1 if z>qualquer letra
// var aa = b.toLocaleLowerCase('pt-BR'); // transforma em minuscula respeitando regras culturais
// var ab = b.toLocaleUpperCase('tr-TR'); // transforma em maiucula respeitando regras culturais
// var ac = b.length; //mostra a quantidade total de char
// var ad = b.normalize('NFKD'); // Normaliza para os padroes NFC, NFD, NFKC, NFKC
// var ae = String.fromCharCode(72, 101, 108, 108, 111); // informar strings por charCode

// document.write('c: ' + c + '<br>');
// document.write('d: ' + d + '<br>');
// document.write('e: ' + e + '<br>');
// document.write('f: ' + f + '<br>');
// document.write('g: ' + g + '<br>');
// document.write('h: ' + h + '<br>');
// document.write('i: ' + i + '<br>');
// document.write('j: ' + j + '<br>');
// document.write('k: ' + k + '<br>');
// document.write('l: ' + l + '<br>');
// document.write('m: ' + m + '<br>');
// document.write('n: ' + n + '<br>');
// document.write('o: ' + o + '<br>');
// document.write('p: ' + p + '<br>');
// document.write('q: ' + q + '<br>');
// document.write('r: ' + r + '<br>');
// document.write('s: ' + s + '<br>');
// document.write('t: ' + t + '<br>');
// document.write('u: ' + u + '<br>');
// document.write('v: ' + v + '<br>');
// document.write('w: ' + w + '<br>');
// document.write('x: ' + x + '<br>');
// document.write('y: ' + y + '<br>');
// document.write('z: ' + z + '<br>');
// document.write('aa: ' + aa + '<br>');
// document.write('ab: ' + ab + '<br>');
// document.write('ac: ' + ac + '<br>');
// document.write('ad: ' + ad + '<br>');
// document.write('ae: ' + ae + '<br>');

///////////////////////////////// BOOLEAN AND IF STATEMENTS ///////////////////////////////////////////

                                // .toString(): Converte o booleano em string ("true" ou "false").
                                // .valueOf(): Retorna o valor primitivo booleano (true ou false).

                                // Estruturas de Controle com if

                                // if (condition): Executa um bloco de código se a condição for true.
                                // else: Executa um bloco de código se a condição do if for false.
                                // else if (condition): Testa uma nova condição se o if anterior for false.

                                // ==(igual, ignora typeof), +=(a=a+b), -=(a=a-b), >=(maior ou igual), <=(menor ou igual),
                                // !=(diferente, ignora typeof) ===(igual, considera tipo str=>str),
                                // !==(diferente, considera tipo str=>str), x++(acrescenta 1), x--(decrementa)
                                // || (OR), && (AND), !(NOT)
                                
// let isSunny = true ;
// isSunny = false ;
// let isWeekend = true;
// isWeekend = false;
// let isRaining = true;
// isRaining = false;

// document.write(isSunny + "<br>");
// document.write(isWeekend + "<br>");

// isSunny = false ;
// document.write(typeof isSunny + "<br>");
// document.write("Is it a Sunny Day? " + isSunny.toString() + "<br>"); //converte para string somente no momento
// isSunny = isSunny.toString(); //converte para string permanentemente
// document.write(typeof isSunny + "<br>");

// document.write("Is it a Sunny Day? " + isSunny.valueOf() + "<br>");

// if(isSunny === true) {
//     document.write("It's a Sunny Day");
// } else {
//     document.write("It's not a Sunny Day");
// }

// if (isWeekend && isSunny == true) {
//     document.body.innerHTML = "Go to the beach mf";
// } else if (isRaining == false || isSunny == true) {
//     document.body.innerHTML = "Lets go out mf";
// } else if (isWeekend == true && isRaining == true) {
//     document.body.innerHTML = "movie time mf";
// } else {
//     document.body.innerHTML = "Stay at home mf";
// }


// let age = 18;
// age = 18;

// if (age >= 18) {
//     document.write("You're an Adult");
// } else {
//     document.write("You're an Minor");
// }

// let isAdult = age >= 18 ? true : false;

// document.write("<br>" + isAdult);

// let temp = 20;
// if (temp > 30) {
//     document.body.innerHTML = "It's hot af";
// } else if (temp > 26) {
//     document.body.innerHTML = "It's mid af";
// } else {
//     document.body.innerHTML = "It's chill af";
// }

///////////////////////////////// TERNARY STATEMENT ///////////////////////////////////////////////////
                                // (basicamente um if else na mesma linha, o ? atua como 
                                // uma pergunta e depois do : vem as respostas)
                                // Sintaxe: condition ? valueIfTrue : valueIfFalse
                                // Retorna valueIfTrue se a condição for true
                                // ou valueIfFalse se for false
// var x = 200;
// var y;
// x == 201 ? (y="yes") : (y = "no");
// document.write(y);
                            //ou
// y = "value: " + (x == 200 ? "yes" : "no");
// document.write(y);

//////////////////////////////// SWITCH, varios comandos diferentes para a mesma var ///////////////////

// var day = 0;
// var day = 1;
// var day = 2;
// var day = 3;
// var day = 4;
// var day = 5;
// var day = 6;
// var day = 7;
// switch (day) {
//     case 0:
//         document.write("Today is Sunday");
//         break;
//     case 1:
//         document.write("Today is Monday");        
//         break;
//     case 2:
//         document.write("Today is Tuesday");        
//         break;
//     case 3:
//         document.write("Today is Wednesday");       
//         break;
//     case 4:
//         document.write("Today is Thursday");       
//         break;
//     case 5:
//         document.write("Today is Friday");     
//         break;
//     case 6:
//         document.write("Today is Saturday");
//         break;
//     default:
//         console.error("not today")
//         break;
// }

///////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////

                                //Métodos do Objeto Function

                                // .apply(thisArg, argsArray): Chama a função com thisArg como this e argsArray como argumentos.
                                // .call(thisArg, ...args): Chama a função com thisArg como this e argumentos individuais.
                                // .bind(thisArg, ...args): Cria nova função com thisArg fixo e argumentos pré-definidos.
                                // .toString(): Retorna a representação da função como string (código-fonte).

                                // Estruturas de Funções

                                // function nome(param) {}: Declara uma função nomeada que pode ser chamada.
                                // const nome = function(param) {}: Expressão de função anônima atribuída a uma variável.
                                // const nome = (param) => {}: Função arrow (seta) com sintaxe concisa, sem this próprio.
                                // (function() {})(): Função imediatamente invocada (IIFE) que executa ao ser definida.

                                //Métodos de Function:
                                //.apply e .call são usados para controlar o contexto (this) e passar argumentos.
                                //.bind cria uma nova função com this fixo, útil para callbacks.
                                //.toString é útil para depuração, mas o formato do código retornado depende da implementação.
                                //Arrow functions (=>) não têm this próprio, herdando-o do contexto pai, e são mais concisas.

// function greet(name) {
//     return name + ", Whassup bro";
// }
// document.write(greet("Jim"));

// const sum = function (a, b) { // pode ser chamada em qualquer momento
//     return a + b;
// };
// document.write(sum(5, 5) + "<br>");

// const add = (a, b) => a + b; // ideal para uso local
// document.write(add(10, 5) + "<br>");

// (function() { // chamadas imediatamente
//     document.write("This is Working" + "<br>");
// })();

// setTimeout(function () { // função anônima
//     console.log("this anonymous function is working")
// }, 999);

// function* generateNumbers() { // função geradora, gera algo diferente toda vez que é chamada usando o next
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     yield 6;
// }
// const gen = generateNumbers();
// document.write(gen.next().value + "<br>");
// document.write(gen.next().value + "<br>");
// document.write(gen.next().value + "<br>");
// document.write(gen.next().value + "<br>");
// document.write(gen.next().value + "<br>");
// document.write(gen.next().value + "<br>");

// function Person(name, age) { //constructor function, usada para criar usuarios
//     this.name = name;
//     this.age = age;
// }
// const person = new Person("Jerry", 25);
// document.write(person.name + " is ");
// document.write(person.age + "<br>");

// Exemplo de função com array
// let numbers = [2, 3, 4];
// let add = numbers.map(num => num + num);
// console.log("Addition: " + add);
// numbers = [2, 3, 4];
// let sub = numbers.map(num => num - num);
// console.log("Subtraction: " + sub);
// numbers = [2, 3, 4];
// let mult = numbers.map(num => num * num);
// console.log("Multiplication: " + mult);
// numbers = [2, 3, 4];
// let divi = numbers.map(num => num / num);
// console.log("Division: " + mult);
// numbers = [2, 3, 4];
// let exp = numbers.map(num => num ** num);
// console.log("Exponential: " + exp);
// numbers = [2, 3, 4];
// let minEqu = numbers.map(num => (num * 2) >= (num / Math.random()));
// console.log("Minimal and Equal to: " + minEqu);

///////////////////////////////// FUNÇÕES DE CONVERSÃO ////////////////////////////////////////////////

                                // .parseInt(string, radix): Converte string em número inteiro na base especificada.
                                // .parseFloat(string): Converte string em número de ponto flutuante.
                                // Number(value): Converte valor em número (inteiro ou flutuante).
                                // String(value): Converte valor em string.
                                // Boolean(value): Converte valor em booleano (true ou false).
                                // .toString(radix): Converte número ou objeto em string, com base opcional para números.
                                // .valueOf(): Retorna o valor primitivo de um objeto.
                                // .toFixed(digits): Converte número em string com digits casas decimais.
                                // .toExponential(fractionDigits): Converte número em string em notação exponencial.
                                // .toPrecision(precision): Converte número em string com precision dígitos significativos.
                                // +value: Operador unário que converte valor em número.
                                // !!value: Converte valor em booleano usando dupla negação.

///////////////////////////////// FUNCTION EVENTS ///////////////////////////////////////////////////

                                //     1. Eventos de Mouse
                                //     click: Clique com o botão principal do mouse.
                                //     dblclick: Clique duplo.
                                //     mousedown: Botão do mouse pressionado.
                                //     mouseup: Botão do mouse liberado.
                                //     mousemove: Movimento do mouse.
                                //     mouseover: Ponteiro entra no elemento.
                                //     mouseout: Ponteiro sai do elemento.
                                //     mouseenter: Ponteiro entra no elemento (não propaga como mouseover).
                                //     mouseleave: Ponteiro sai do elemento (não propaga como mouseout).
                                //     contextmenu: Clique com o botão direito (menu de contexto).
                                
                                // 2. Eventos de Teclado       
                                //     keydown: Tecla pressionada.
                                //     keyup: Tecla liberada.
                                //     keypress: Tecla pressionada (obsoleto, evite usar).
                                
                                // 3. Eventos de Formulário       
                                //     submit: Formulário enviado.
                                //     reset: Formulário redefinido.
                                //     change: Valor de um elemento (como <input>, <select>) alterado.
                                //     input: Valor de um <input> ou <textarea> alterado (dispara a cada mudança).
                                //     focus: Elemento recebe foco.
                                //     blur: Elemento perde foco.
                                //     select: Texto selecionado em um <input> ou <textarea>.    

                                // 4. Eventos de Janela
                                //     load: Recurso (página, imagem, etc.) carregado.
                                //     unload: Página descarregada (pouco usado).
                                //     resize: Janela redimensionada.
                                //     scroll: Rolagem da página ou elemento.
                                //     beforeunload: Antes de a página ser descarregada (útil para avisos).
                                
                                // 5. Eventos de Toque (Touch)      
                                //     touchstart: Toque iniciado.
                                //     touchend: Toque terminado.
                                //     touchmove: Movimento durante o toque.
                                //     touchcancel: Toque interrompido.
                                
                                // 6. Eventos de Arrastar (Drag and Drop)    
                                //     drag: Elemento sendo arrastado.
                                //     dragstart: Início do arraste.
                                //     dragend: Fim do arraste.
                                //     dragenter: Elemento arrastado entra em uma zona válida.
                                //     dragleave: Elemento arrastado sai de uma zona válida.
                                //     dragover: Elemento arrastado está sobre uma zona válida.
                                //     drop: Elemento solto em uma zona válida.
                                
                                // 7. Eventos de Mídia    
                                //     play: Reprodução de mídia iniciada.
                                //     pause: Reprodução de mídia pausada.
                                //     ended: Reprodução de mídia terminada.
                                //     volumechange: Volume alterado.
                                //     timeupdate: Tempo de reprodução atualizado.
                                
                                // 8. Eventos de Animação e Transição     
                                //     animationstart: Animação CSS iniciada.
                                //     animationend: Animação CSS terminada.
                                //     animationiteration: Animação CSS repetida.
                                //     transitionend: Transição CSS terminada.

                                // 9. Eventos de Clipboard   
                                //     copy: Conteúdo copiado.
                                //     cut: Conteúdo cortado.
                                //     paste: Conteúdo colado.
                                
                                // 10. Outros Eventos  
                                //     error: Erro ocorrido (ex.: falha ao carregar uma imagem).
                                //     online: Navegador fica online.
                                //     offline: Navegador fica offline.
                                //     visibilitychange: Visibilidade da página alterada (ex.: aba minimizada).
                                //     wheel: Roda do mouse girada.

///////////////////////////////// OBJECTS METHODS /////////////////////////////////////////////////////

                                // Propriedades e Métodos de Instância

                                // .hasOwnProperty(prop): Verifica se o objeto possui a propriedade diretamente, retorna true/false.
                                // .isPrototypeOf(obj): Verifica se o objeto está na cadeia de protótipos de obj, retorna true/false.
                                // .propertyIsEnumerable(prop): Verifica se a propriedade é enumerável, retorna true/false.
                                // .toString(): Retorna representação do objeto como string (padrão: "[object Object]").
                                // .valueOf(): Retorna o valor primitivo do objeto.
                                // .toLocaleString(): Retorna string localizada do objeto (geralmente igual a .toString()).

                                // Métodos Estáticos

                                // .assign(target, ...sources): Copia propriedades enumeráveis de origem para o alvo.
                                // .create(proto, properties): Cria novo objeto com protótipo e propriedades definidas.
                                // .defineProperty(obj, prop, descriptor): Define ou modifica uma propriedade no objeto.
                                // .defineProperties(obj, props): Define múltiplas propriedades no objeto.
                                // .entries(obj): Retorna array de pares [chave, valor] das propriedades enumeráveis.
                                // .freeze(obj): Congela objeto, impedindo modificações.
                                // .fromEntries(entries): Cria objeto a partir de array de pares [chave, valor].
                                // .getOwnPropertyDescriptor(obj, prop): Retorna descritor da propriedade ou undefined.
                                // .getOwnPropertyDescriptors(obj): Retorna descritores de todas as propriedades próprias.
                                // .getOwnPropertyNames(obj): Retorna array com nomes de todas as propriedades próprias.
                                // .getOwnPropertySymbols(obj): Retorna array com símbolos de propriedades próprias.
                                // .getPrototypeOf(obj): Retorna o protótipo do objeto.
                                // .groupBy(items, callback): Agrupa itens em objeto com base em função de chave.
                                // .hasOwn(obj, prop): Verifica se objeto possui propriedade diretamente, retorna true/false.
                                // .is(value1, value2): Compara se dois valores são iguais (como ===, mas distingue +0 e -0).
                                // .isExtensible(obj): Verifica se objeto pode receber novas propriedades, retorna true/false.
                                // .isFrozen(obj): Verifica se objeto está congelado, retorna true/false.
                                // .isSealed(obj): Verifica se objeto está selado, retorna true/false.
                                // .keys(obj): Retorna array com nomes de propriedades enumeráveis.
                                // .preventExtensions(obj): Impede adição de novas propriedades ao objeto.
                                // .seal(obj): Sela objeto, impedindo adição/remoção de propriedades.
                                // .setPrototypeOf(obj, proto): Define o protótipo do objeto.
                                // .values(obj): Retorna array com valores de propriedades enumeráveis.

// let person = {
//     name: "Anna",
//     age: 43,
//     country:"USA"
// }          
// document.write(person + "<br>"); // mostra somente como object se chamado inteiro fora do console
// document.write("Name: " + person.name + ", Age: "); // mostra o objeto específico                      
// document.write(person.age + ", From: " + person.country + "<br>"); // mostra o objeto específico

///////////////////////////////// ARRAY OBJECTS //////////////////////////////////////////////////////

                                // .length: Retorna ou define o número de elementos.
                                // .at(index): Retorna elemento no índice, aceita negativos.
                                // .concat(...arrays): Combina arrays, retorna novo.
                                // .includes(value, fromIndex): Verifica se contém valor, retorna true/false.
                                // .indexOf(value, fromIndex): Retorna primeiro índice do valor ou -1.
                                // .lastIndexOf(value, fromIndex): Retorna último índice do valor ou -1.
                                // .join(separator): Une elementos em string com separador.
                                // .slice(start, end): Retorna novo array de start a end (exclusivo).
                                // .toString(): Retorna string com elementos separados por vírgula.
                                // .toLocaleString(locales, options): Retorna string com elementos formatados por localidade.
                                // .pop(): Remove e retorna último elemento.
                                // .push(...items): Adiciona elementos ao final, retorna comprimento.
                                // .shift(): Remove e retorna primeiro elemento.
                                // .unshift(...items): Adiciona elementos ao início, retorna comprimento.
                                // .splice(start, deleteCount, ...items): Remove/adiciona elementos, retorna removidos.
                                // .reverse(): Inverte ordem dos elementos.
                                // .sort(compareFn): Ordena elementos, opcionalmente com função.
                                // .fill(value, start, end): Preenche com value de start a end.
                                // .copyWithin(target, start, end): Copia parte do array para target.
                                // .forEach(callback, thisArg): Executa função para cada elemento.
                                // .map(callback, thisArg): Retorna novo array com resultados da função.
                                // .filter(callback, thisArg): Retorna novo array com elementos que passam no teste.
                                // .reduce(callback, initialValue): Reduz array a um valor, da esquerda.
                                // .reduceRight(callback, initialValue): Reduz array a um valor, da direita.
                                // .every(callback, thisArg): Verifica se todos passam no teste, retorna true/false.
                                // .some(callback, thisArg): Verifica se algum passa no teste, retorna true/false.
                                // .find(callback, thisArg): Retorna primeiro elemento que passa no teste ou undefined.
                                // .findIndex(callback, thisArg): Retorna índice do primeiro que passa ou -1.
                                // .findLast(callback, thisArg): Retorna último elemento que passa ou undefined.
                                // .findLastIndex(callback, thisArg): Retorna índice do último que passa ou -1.
                                // .entries(): Retorna iterador com pares [índice, valor].
                                // .keys(): Retorna iterador com índices.
                                // .values(): Retorna iterador com valores.
                                // .from(iterable, mapFn, thisArg): Cria array de iterável, opcionalmente mapeando.
                                // .of(...elements): Cria array com elementos fornecidos.
                                // .isArray(obj): Verifica se é array, retorna true/false.

// let fruits = ["Banana", "Apple", "Peach", "32"];
// document.write(fruits[3] + "<br>");
// let x = Number(fruits[3]);
// document.write(typeof x);

// let fruits = ["Peach", "Apple", "Banana", "Orange", "Strawberry"]; // forma 1
// let digits = new Array(1, 2, 3); // forma 2

// document.writeln("Item Isolado: " + fruits[1] + "<br>"); // retorna item isolado
// document.writeln(fruits + "<br>");

// let modifyItem = (fruits[0] = "Pineapple"); // Modifica o item o array
// let deleteItem = (delete fruits[0]); // Deleta o item do Array
// let a = fruits.push("Lemon","Cherry"); // adiciona item por ultimo, retorna novo length
// let b = fruits.pop(); // remove ultimo item, retorna item removido
// let c = fruits.shift(); // remove primeiro item, retorna item removido
// let d = fruits.unshift("Macacheira"); // adiciona item no início, retorna lenght
// let e = 0; // .forEach separa cada item do array em uma linha
// let f = fruits.length; // mostra quantos itens tem no array
// let g = fruits.sort(); // organiza alfabeticamente
// let h = fruits.reverse(); // inverte a ordem do array
// let i = fruits.includes("Mango"); // Procura por um valor no Array, retorna Boolean
// let j = fruits.splice(1, 2); // Remove itens do array e retorna entre os valores solicitados
// let k = fruits.slice(3); // Retorna valores anteriores e remove a partir de valor

// document.write("fruits[0] = 'Pineapple' = Modifica o item do Array. Valor: " + modifyItem + "<br>");
// document.write("delete fruits[0] = Deleta o item do Array. Valor: " + deleteItem + "<br>");
// document.write("a = .push('Lemon', 'Cherry'): Adiciona item por último no Array e retorna novo length. Valor: " + a +"<br>");
// document.write("b = .pop(): Remove último item do Array e retorna item removido. Valor: " + b + "<br>");
// document.write("c = .shift(): Remove primeiro item do Array. Valor: " + c + "<br>");
// document.write("d = .unshift('Macacheira'): " + d + ". Adiciona item no início do Array<br>");
// e = fruits.forEach((fruit) =>document.write("e = .forEach: Separa cada item do Array. Valor: " + fruit + "<br>"));
// document.write("f = .length: Mostra quantidade de itens no Array. Valor: " + f + "<br>");
// document.write("g = .sort(): Organiza alfabeticamente os itens do Array. Valor: " + g + "<br>");
// document.write("h = .reverse(): Adiciona valor por ultimo. Valor: " + h + "<br>");
// document.write("i = .includes('Mango'): Procura por um valor no Array e retorna Boolean. Valor: " + i + "<br>");
// document.write("j = .splice(1, 2): Remove itens do array e retorna entre os valores solicitados. Valor: " + j + "<br>");
// document.write("k = .slice(3): Retorna valores anteriores e remove a partir de valor. Valor: " + k + "<br>");

// var array = [10, 20, 30, 40, 50, 60, 70];
// for (var a = 0; a <= 5; a++) {
//     document.write(array[a] + "<br>");
// }


                            // CONCAT AND JOIN ARRAY
                            // CONCAT junta varios arrays em 1
                            // JOIN altera o , do array pelo q for definido
// var a = [1, 2, 3, 4];
// var b = ["pedro", "jose", "maria", "euclides"];
// var c = a.concat(b);
// document.write(c + "<br>");
// var d = c.join(" / "); //<---
// document.write(d + "<br>");

                            // isARRAY
                            // serve para identificar se é um array ou não
                            // vai gerar true ou false
// var a = [10, 20, 30, 40, 50];
// document.write(a + "<br>");
// var a = 20;
// var b = Array.isArray(a);
// document.write(b + "<br>");

// if (Array.isArray(a)) {
//     document.write("A is an Array");
// } else {
//     document.write("A is Not an Array");
// }

                            // INDEXOF AND LASTINDEX ARRAY
                            // indexOf mostra o valor dentro do array primeira ocorrência
                            // lastIndex mesma coisa, porém última ocorrência
// var a = ["cf", "ct", "ci"];                     
// document.write(a + "<br>");       
// var b = a.indexOf("ct");
// document.write(b + "<br>");       
// var c = a.lastIndexOf("ct");                     
// document.write(c + "<br>");       
          

                            // TOSTRING, VALUEOF, FILL
                            // toString transforma em string
                            // valueOf retorna o valor do array
                            // fill substitui os itens do array

// var a = [10, 20, 30, 40, 50];
// document.write(a + "<br>");
// a.toString(a);
// document.write(a + "<br>");
// a.valueOf();
// document.write(a + "<br>");
// a.fill(1);
// document.write(a + "<br>");

                            // SOME AND EVERY array
                            // some vai dar true se algum item do array atender a função
                            // every vai dar true somente se todos atenderem
// var a = [10, 20, 30, 40, 50];
// document.write(a + "<br>" + "<br>");
// var b = a.some(checkValue);
// document.write(b + "<br>");

// var b = a.every(checkValue);
// document.write(b + "<br>");

// function checkValue(age) {
//     return age >= 18;
// }

                            // FIND AND FINDINDEX array
                            // find vai mostrar os itens do array que atendem a função
                            // findIndex vai mostrar o valor do item que atendeu a função
// var a = [10, 20, 30, 40, 50];
// document.write(a + "<br>" + "<br>");
// var b = a.find(checkValue);
// document.write(b + "<br>");

// var b = a.findIndex(checkValue);
// document.write(b + "<br>");
// function checkValue(age) {
//     return age >= 18;
// }

                            // FILTER array
                            // remove os itens que não atendem a condição da função
// var a = [10, 20, 30, 40, 50];
// document.write(a + "<br>" + "<br>");
// var b = a.filter(checkValue);
// document.write(b + "<br>");

// function checkValue(age) {
//     return age >= 18;
// } 

///////////////////////////////// DATE OBJECTS /////////////////////////////////////////////////////

                            //1. Obter Componentes da Data/Hora

                                // .getFullYear(): Retorna o ano com 4 dígitos.
                                // .getMonth(): Retorna o mês (0 a 11).
                                // .getDate(): Retorna o dia do mês (1 a 31).
                                // .getDay(): Retorna o dia da semana (0 a 6, 0 é domingo).
                                // .getHours(): Retorna a hora (0 a 23).
                                // .getMinutes(): Retorna os minutos (0 a 59).
                                // .getSeconds(): Retorna os segundos (0 a 59).
                                // .getMilliseconds(): Retorna os milissegundos (0 a 999).
                                // .getTime(): Retorna o timestamp em milissegundos desde 1/1/1970.
                                // .getTimezoneOffset(): Retorna o deslocamento do fuso horário em minutos.

                                //2. Obter Componentes da Data/Hora (UTC)

                                // .getUTCFullYear(): Retorna o ano com 4 dígitos (UTC).
                                // .getUTCMonth(): Retorna o mês (0 a 11, UTC).
                                // .getUTCDate(): Retorna o dia do mês (1 a 31, UTC).
                                // .getUTCDay(): Retorna o dia da semana (0 a 6, UTC).
                                // .getUTCHours(): Retorna a hora (0 a 23, UTC).
                                // .getUTCMinutes(): Retorna os minutos (0 a 59, UTC).
                                // .getUTCSeconds(): Retorna os segundos (0 a 59, UTC).
                                // .getUTCMilliseconds(): Retorna os milissegundos (0 a 999, UTC).

                                //3. Definir Componentes da Data/Hora

                                // .setFullYear(year, month, date): Define o ano, com mês e dia opcionais.
                                // .setMonth(month, date): Define o mês, com dia opcional.
                                // .setDate(date): Define o dia do mês.
                                // .setHours(hours, minutes, seconds, ms): Define hora, com minutos, segundos e milissegundos opcionais.
                                // .setMinutes(minutes, seconds, ms): Define minutos, com segundos e milissegundos opcionais.
                                // .setSeconds(seconds, ms): Define segundos, com milissegundos opcionais.
                                // .setMilliseconds(ms): Define os milissegundos.
                                // .setTime(ms): Define a data com base em milissegundos desde 1/1/1970.

                                //4. Definir Componentes da Data/Hora (UTC)

                                // .setUTCFullYear(year, month, date): Define o ano (UTC), com mês e dia opcionais.
                                // .setUTCMonth(month, date): Define o mês (UTC), com dia opcional.
                                // .setUTCDate(date): Define o dia do mês (UTC).
                                // .setUTCHours(hours, minutes, seconds, ms): Define hora (UTC), com minutos, segundos e milissegundos opcionais.
                                // .setUTCMinutes(minutes, seconds, ms): Define minutos (UTC), com segundos e milissegundos opcionais.
                                // .setUTCSeconds(seconds, ms): Define segundos (UTC), com milissegundos opcionais.
                                // .setUTCMilliseconds(ms): Define os milissegundos (UTC).

                                //5. Formatar Data

                                // .toString(): Retorna a data como string legível.
                                // .toDateString(): Retorna apenas a parte da data como string.
                                // .toTimeString(): Retorna apenas a parte da hora como string.
                                // .toISOString(): Retorna a data no formato ISO (UTC).
                                // .toUTCString(): Retorna a data como string no formato UTC.
                                // .toLocaleString(locales, options): Retorna a data formatada conforme localidade.
                                // .toLocaleDateString(locales, options): Retorna apenas a data formatada conforme localidade.
                                // .toLocaleTimeString(locales, options): Retorna apenas a hora formatada conforme localidade.
                                // .toJSON(): Retorna a data como string ISO para JSON.

                                //6. Métodos Estáticos

                                // .now(): Retorna o timestamp atual em milissegundos.
                                // .parse(dateString): Converte uma string de data em timestamp.
                                // .UTC(year, month, date, hours, minutes, seconds, ms): Cria timestamp para data UTC.

// var date = new Date();
// document.write("No do Dia da Semana (0,6): " + date.getDay() + "<br>");
// document.write("Dia (1,31): " + date.getDate() + "<br>");
// document.write("Mês (0, 11): " + date.getMonth() + "<br>");
// document.write("Ano: " + date.getFullYear() + "<br>");
// document.write("Hora (0, 23): " + date.getHours() + "hr" + "<br>");
// document.write("Minuto (0, 59): " + date.getMinutes() + "min" + "<br>");
// document.write("Segundo (0, 59): " + date.getSeconds() + "s" + "<br>");
// document.write("Milisegundos (0, 999): " + date.getMilliseconds() + "ms" + "<br>");
// document.write("Tempo desde 1/1/1970 em ms: " + date.getTime() + "ms" + "<br>");
// document.write("TimeZone: " + date.getTimezoneOffset() + "min" + "<br>");

// document.write("Completo: " + date.toString() + "<br>");
// document.write("Dia no Ano, Hora Atual: " + date.toLocaleString() + "<br>");
// document.write("Dia da Semana, Mês, Dia, Ano: " + date.toDateString() + "<br>");
// document.write("Dia, Mês, Ano: " + date.toLocaleDateString() + "<br>");
// document.write("Hora, Minuto, Segundo: " + date.toLocaleTimeString() + "<br>");

////////////////////////////////// REGEXP METHOD ///////////////////////////////////////////////////

                                // Propriedades de Instância de RegExp

                                // .source: Retorna o padrão da expressão regular como string.
                                // .flags: Retorna string com as flags da expressão (ex.: "gi").
                                // .global: Retorna true se a flag g (global) está ativa.
                                // .ignoreCase: Retorna true se a flag i (ignorar maiúsculas) está ativa.
                                // .multiline: Retorna true se a flag m (multilinha) está ativa.
                                // .sticky: Retorna true se a flag y (pegajosa) está ativa.
                                // .unicode: Retorna true se a flag u (unicode) está ativa.
                                // .dotAll: Retorna true se a flag s (ponto inclui \n) está ativa.
                                // .lastIndex: Índice onde a próxima busca começa (usado com g ou y).

                                // Métodos de Instância de RegExp

                                // .exec(string): Busca correspondência, retorna array com detalhes ou null.
                                // .test(string): Verifica se há correspondência, retorna true/false.
                                // Métodos de String que Usam RegExp

                                // .match(regexp): Retorna array com correspondências ou null.
                                // .matchAll(regexp): Retorna iterador com todas as correspondências.
                                // .search(regexp): Retorna índice da primeira correspondência ou -1.
                                // .replace(regexp, replacement): Substitui correspondências por replacement.
                                // .replaceAll(regexp, replacement): Substitui todas as correspondências por replacement.
                                // .split(regexp, limit): Divide string em array usando regexp como separador.

                                // Observações

                                // Instância vs. String:
                                //     Métodos de RegExp (.exec, .test) são chamados na expressão regular (ex.: regex.test(str)).
                                //     Métodos de String (.match, .replace, etc.) recebem um RegExp como argumento (ex.: str.match(regex)).

                                // Flags:

                                //     g: Busca global (todas as correspondências).
                                //     i: Ignora maiúsculas/minúsculas.
                                //     m: Trata início/fim de linhas (^, $) em multilinhas.
                                //     y: Busca a partir de lastIndex (pegajosa).
                                //     u: Suporte completo a Unicode.
                                //     s: Ponto (.) inclui quebras de linha.

                                // Mutabilidade:

                                //     .exec e .test com flag g ou y atualizam .lastIndex.
                                //     Métodos de String retornam novos valores, sem alterar a string original.

// const texto = "Gato, cão, GATO!";
// const regex = /gato/gi;

// // .match(regexp): Retorna correspondências
// console.log(texto.match(regex)); // ["Gato", "GATO"]

// // .matchAll(regexp): Retorna iterador com todas correspondências
// const matches = texto.matchAll(regex);
// for (const match of matches) {
//   console.log(match); // ["Gato", index: 0, ...], ["GATO", index: 12, ...]
// }

// // .search(regexp): Retorna índice da primeira correspondência
// console.log(texto.search(/cão/)); // 6
// console.log(texto.search(/inexistente/)); // -1

// // .replace(regexp, replacement): Substitui correspondências
// console.log(texto.replace(/gato/i, "felino")); // "felino, cão, GATO!"

// // .replaceAll(regexp, replacement): Substitui todas correspondências
// console.log(texto.replaceAll(/gato/gi, "felino")); // "felino, cão, felino!"

// // .split(regexp, limit): Divide string por regexp
// console.log(texto.split(/,\s*/)); // ["Gato", "cão", "GATO!"]

///////////////////////////////// JSON OBJECT //////////////////////////////////////////////////////

                                // .parse(text, reviver): Converte string JSON em objeto JavaScript.
                                // .stringify(value, replacer, space): Converte valor JavaScript em string JSON.

                            // Observações

                                // Contexto: Métodos estáticos do objeto global JSON (ex.: JSON.parse).

                            // Parâmetros:
                                //.parse: reviver (opcional) é uma função para transformar valores durante o parsing.
                                //.stringify: replacer (opcional) filtra/transforma valores; space (opcional) adiciona indentação.
                            // Erro: .parse lança SyntaxError para JSON inválido; .stringify pode lançar erros para valores não serializáveis (ex.: funções).

// let jsonString = '{"name": "Anna", "age": 24, "region": "UK", "salary": 30000 }';
// let obj = JSON.parse(jsonString);

// console.log(obj.name, obj.age, obj.region, obj.salary);

// console.log("Name: " + obj.name);
// console.log("Age: " + obj.age);
// console.log("Region: " + obj.region);
// console.log("Salary: " + obj.salary);

///////////////////////////// PROMISE METHOD //////////////////////////////////////////////////////////

                        // Métodos de Instância de Promise

                            // .then(onFulfilled, onRejected): Executa função quando a promessa é resolvida ou rejeitada, retorna nova promessa.
                            // .catch(onRejected): Executa função quando a promessa é rejeitada, retorna nova promessa.
                            // .finally(onFinally): Executa função após resolução ou rejeição, retorna nova promessa.
                            // Métodos Estáticos de Promise
                            // .resolve(value): Cria promessa resolvida com o valor especificado.
                            // .reject(reason): Cria promessa rejeitada com o motivo especificado.
                            // .all(iterable): Retorna promessa que resolve quando todas as promessas do iterável resolvem, ou rejeita na primeira rejeição.
                            // .allSettled(iterable): Retorna promessa que resolve com o estado de todas as promessas do iterável (resolvidas ou rejeitadas).
                            // .any(iterable): Retorna promessa que resolve com o primeiro valor resolvido do iterável, ou rejeita se todas rejeitarem.
                            // .race(iterable): Retorna promessa que resolve ou rejeita com o primeiro resultado do iterável.

                        // Observações

                            //     Contexto: Promise é um objeto nativo para operações assíncronas (ex.: new Promise((resolve, reject) => {...})).
                            //     Estado: Uma promessa pode estar pending (pendente), fulfilled (resolvida), ou rejected (rejeitada).
                            //     Encadeamento: .then, .catch, e .finally permitem encadear operações, retornando novas promessas.
                            //     Suporte: Amplamente suportado (ES6+); .allSettled e .any requerem ES2020+.
                            //     Uso Comum: Gerenciamento de chamadas assíncronas (ex.: fetch, setTimeout) e controle de fluxo.

// let promise = new Promise((resolve, reject) => {
//     resolve("Successful");
// });
// promise.then(result => console.log(result));

///////////////////////////// ERROR OBJECT ////////////////////////////////////////////////////////////

                        // Propriedades de Instância de Error

                            // .message: Retorna a mensagem descritiva do erro.
                            // .name: Retorna o nome do tipo de erro (ex.: "Error", "TypeError").
                            // .stack: Retorna a pilha de chamadas (trace) como string (não padronizado).
                            // .cause: Retorna a causa do erro, se especificada (ES2022+).

                        // Construtores de Tipos de Erros
                            // Error(message, options): Cria erro genérico com mensagem e opções (ex.: cause).
                            // TypeError(message, options): Cria erro para tipos inválidos.
                            // ReferenceError(message, options): Cria erro para referências inválidas.
                            // SyntaxError(message, options): Cria erro para sintaxe inválida.
                            // RangeError(message, options): Cria erro para valores fora do intervalo.
                            // URIError(message, options): Cria erro para URIs malformadas.
                            // EvalError(message, options): Cria erro para uso inválido de eval (obsoleto).
                            // AggregateError(errors, message, options): Cria erro que agrega múltiplos erros (ES2020+).

// try {
//     throw new Error("Something is Wrong");
// } catch (error) {
//     console.error(error.message);
// }

// function validarUsuario(nome, idade) {
//     try {
//       if (typeof nome !== "string" || nome.trim() === "" || !/^[A-Za-z]+$/.test(nome)) {
//         throw new TypeError("Nome deve ser ser de A a Z");
//       }
//       if (!Number.isInteger(idade) || idade < 0) {
//         throw new RangeError("Idade deve ser um número inteiro não negativo");
//       }
//       return { nome, idade };
//     } catch (erro) {
//       console.error(`${erro.name}: ${erro.message}`);
//       throw erro; // Propaga erro para chamador
//     }
//   }
  
  // Testando validação
//   try {
//     validarUsuario("", -5); // Lança erros
//   } catch (e) {
//     console.log(e.stack); // Mostra pilha para depuração
//   }
  
//   try {
//     const usuario = validarUsuario("Anna", 25);
//     console.log("Usuário válido:", usuario); // { nome: "Ana", idade: 25 }
//   } catch (e) {
//     console.log("Falha na validação");
//   }


///////////////////////////// DOCUMENT OBJECT MODEL /////////////////////////////////////////////////////

                        // Propriedades

                            // .body: Retorna elemento <body>.
                            // .documentElement: Retorna elemento <html>.
                            // .head: Retorna elemento <head>.
                            // .title: Retorna/define título da página.
                            // .cookie: Retorna/define cookies do documento.
                            // .readyState: Retorna estado de carregamento.
                            // .visibilityState: Retorna visibilidade do documento.
                            // .activeElement: Retorna elemento focado.
                            // .forms: Retorna coleção de <form>.
                            // .images: Retorna coleção de <img>.
                            // .links: Retorna coleção de <a> com href.
                            // .scripts: Retorna coleção de <script>.

                        // Métodos de Seleção

                            // .getElementById(id): Retorna elemento por id ou null.
                            // .getElementsByClassName(className): Retorna coleção por classe.
                            // .getElementsByTagName(tagName): Retorna coleção por tag.
                            // .getElementsByName(name): Retorna coleção por atributo name.
                            // .querySelector(selector): Retorna primeiro elemento por seletor CSS ou null.
                            // .querySelectorAll(selector): Retorna coleção por seletor CSS.

                        // Métodos de Criação

                            // .createElement(tagName,options): Cria elemento com tag.
                            // .createTextNode(text): Cria nó de texto.
                            // .createDocumentFragment(): Cria fragmento de documento.
                            // .createComment(text): Cria nó de comentário.
                            // .createAttribute(name): Cria atributo.

                        // Métodos de Manipulação

                            // .adoptNode(node): Adota nó de outro documento.
                            // .append(...nodes): Adiciona nós/strings ao final.
                            // .prepend(...nodes): Adiciona nós/strings ao início.
                            // .importNode(node,deep): Importa nó de outro documento.

                        // Métodos de Eventos

                            // .addEventListener(type,listener,options): Registra ouvinte de evento.
                            // .removeEventListener(type,listener,options): Remove ouvinte de evento.
                            // .dispatchEvent(event): Dispara evento personalizado.

                        // Outros Métodos

                            // .write(html): Escreve HTML (obsoleto).
                            // .writeln(html): Escreve HTML com quebra (obsoleto).
                            // .open(): Abre documento para escrita (obsoleto).
                            // .close(): Fecha documento aberto (obsoleto).
                            // .execCommand(command,showUI,value): Executa comando de edição (obsoleto).
                            // .hasFocus(): Retorna true se documento focado.
                            // .elementFromPoint(x,y): Retorna elemento nas coordenadas.
                            // .elementsFromPoint(x,y): Retorna array de elementos nas coordenadas.
                            // .createEvent(type): Cria evento (obsoleto).
                            // .getSelection(): Retorna seleção de texto.

                        // Observações

                            // Contexto: Métodos/propriedades de Document (ex.: document.getElementById).
                            // Mutabilidade: .append, .prepend, .createElement modificam DOM; seleções apenas retornam.
                            // Obsoletos: .write, .writeln, .open, .close, .execCommand desencorajados.
                            // Suporte: ES5+, exceto .elementsFromPoint (ES2017+).
                            // Uso: Manipulação de HTML, eventos, interação com página.


// document.body.style.padding = '0px';                            
// document.body.style.margin = '0px';
// document.body.style.backgroundColor = "pink";                            
// document.body.style.display = 'flex';                          
// document.body.style.flexDirection = 'column';                          
// document.body.style.justifyContent = 'center';
// document.body.style.alignItems = 'center';


// const bitchButton = document.createElement('button');
// bitchButton.textContent = "Click me Bitch";
// bitchButton.style.padding = "20px";
// bitchButton.style.margin = "20px";
// bitchButton.style.fontSize = "20px";
// bitchButton.style.fontWeight = '800';
// bitchButton.style.borderRadius = '10px';
// bitchButton.style.border = 'none';
// bitchButton.style.boxShadow = '0px 0px 10px 0px (rgba(0, 0, 0, 0.72)';

// bitchButton.style.background = 'linear-gradient(to right, rgb(187, 36, 36), rgb(79, 39, 39)';

// document.body.appendChild(bitchButton);

// bitchButton.addEventListener("click", function () {
//     alert("you are a bitch indeed");   
     
// });

// const newPageButton = document.createElement('button');
// newPageButton.textContent = "new Page Button";
// newPageButton.style.padding = "20px";
// newPageButton.style.margin = "20px";
// newPageButton.style.fontSize = "20px";
// newPageButton.style.fontWeight = '800';
// newPageButton.style.borderRadius = '10px';
// newPageButton.style.border = 'none';
// newPageButton.style.boxShadow = '0px 0px 10px 0px (rgba(0, 0, 0, 0.72)';
// newPageButton.style.background = 'linear-gradient(to right, rgb(187, 36, 36), rgb(79, 39, 39)';

// document.body.appendChild(newPageButton);

// newPageButton.addEventListener("click", function () {
//     window.location.href = 'newPage.html';
//   });

///////////////////////////// FOR LOOPS //////////////////////////////////////////////////////////////

                        // Estruturas de Loops

                            // for(init;condition;update): Executa bloco enquanto condição for verdadeira.
                            // for...in(obj): Itera sobre propriedades enumeráveis de objeto.
                            // for...of(iterable): Itera sobre valores de iteráveis (ex.: arrays, strings).

                        // Estruturas de Loops

                            // for(init;condition;update): Executa bloco com inicialização, condição e atualização definidas.
                            // while(condition): Executa bloco enquanto condição for verdadeira, sem inicialização embutida.
                            // do...while(condition): Executa bloco pelo menos uma vez, repete enquanto condição for verdadeira.

                            // Diferenças
                            // .for: Ideal para iterações com contador ou limite conhecido; estrutura compacta com inicialização, condição e atualização em uma linha.
                            // .while: Ideal para iterações com condição dinâmica, sem contador fixo; requer inicialização externa.
                            // .do...while: Similar ao while, mas garante pelo menos uma execução antes de verificar a condição.

                        // Métodos de Iteração Relacionados

                            // .forEach(callback,thisArg): Executa função para cada elemento de array.
                            // .map(callback,thisArg): Cria novo array com resultados da função por elemento.
                            // .filter(callback,thisArg): Cria novo array com elementos que passam no teste.
                            // .reduce(callback,initialValue): Reduz array a um valor, aplicando função acumuladora.
                            // .every(callback,thisArg): Verifica se todos elementos passam no teste, retorna booleano.
                            // .some(callback,thisArg): Verifica se algum elemento passa no teste, retorna booleano.

                        // Observações

                            // .Contexto: Loops for e métodos para iteração em arrays/objetos.
                            // .Mutabilidade: Loops podem modificar dados; métodos como .map criam novos arrays.
                            // .Uso: for para controle preciso; for...of para iteráveis; for...in para objetos; métodos para arrays.

// for (let t = 0; t < 6; t++) { // Executa bloco com inicialização, condição e atualização definidas
//     document.write("For Iteration: " + t + "<br>");
// }                 

// let u = 0;
// while (u < 6) { // Executa bloco enquanto condição for verdadeira, sem inicialização embutida
//     document.write("While Loop: " + u + "<br>");
//     u++;
// }

// let v = 0;
// do { // Executa bloco pelo menos uma vez, repete enquanto condição for verdadeira
//     document.write("Do While Loop: " + v + "<br>");
//     v++;
// } while (v < 6);

// let fruits = ["Apple", "Pineapple", "Orange"];

// for (let fruit of fruits) { // Itera sobre valores de iteráveis (ex.: arrays, strings).
//     document.write(fruit + "<br>");
// }

// for (let index in fruits) { // Itera sobre propriedades enumeráveis de um objeto.
//     document.write(index + ": " + fruits + "<br>");
// }

// // Iterando sobre propriedades de um objeto
// const pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };
// for (let chave in pessoa) {
//   console.log(`${chave}: ${pessoa[chave]}`); 
//   // nome: Ana
//   // idade: 25
//   // cidade: São Paulo
// }

// // Iterando sobre índices de um array (não recomendado)
// const cores = ["vermelho", "azul", "verde"];
// for (let indice in cores) {
//   console.log(`${indice}: ${cores[indice]}`);
//   // 0: vermelho
//   // 1: azul
//   // 2: verde
// }

///////////////////////////// ADVANCED FUNCTIONS ///////////////////////////////////////////////////////
                            // test 
// const greet = function (name) {
//     return `Hello, ${name}`;
// };
// document.write(greet("Alan") + "<br>");                            

// const add = (a, b) => a + b;
// document.write(add(10, 5) + "<br>");

// const greet1 = (name) => {
//     const message = `Hello ${name}!` + "<br>";
//     return message;
// }
// document.write(greet1("john"));

// function greet2 (name = "Guest") {
//     return `Hello ${name}`;
// }

// document.write(greet2() + "<br>");
// document.write(greet2("Joao") + "<br>");

// function sum (...numbers) { //////////////////////////////////////// COOL
//     return numbers.reduce((total, number) => total + number, 0);
// }

// document.write(sum(11, 2, 3, 4));

// function calculate (a, b, operation) { //////////////////////////////// COOL
//     return operation(a,b);
// }

// const add = (x, y) => x + y;
// const sub = (x, y) => x - y;
// const multiply = (x, y) => x * y;
// const divide = (x, y) => x / y;

// document.write(calculate(6, 8, add) + "<br>");
// document.write(calculate(6, 8, sub) + "<br>");
// document.write(calculate(6, 8, multiply) + "<br>");
// document.write(calculate(6, 8, divide) + "<br>");

// function counter () {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }

// const increment = counter();

// setInterval(() => {
//     document.body.innerHTML = (increment() + "<br>");
// }, 1000);

// const multiply = (a) => (b) => a * b;
// const double = multiply(2);

// document.write(double(6) + "<br>");
// document.write(double(8) + "<br>");

// const add = (a => a + 2);
// const multiply = (a) => a * 4;
// const compose = (s, f) => (a) => s(f(a));
// const addThenMultiply = compose(multiply, add);

// document.write(addThenMultiply(5));

// function fetchData (callback) { // CALLBACK FUNCTION
//     setTimeout(() => {
//         callback("Fetched");
//     }, 1000);
// }
// fetchData((message) => document.write(message));

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("fetched");
//     }, 1000);
// });

// fetchData.then((message) => document.write(message));

// const fetchData = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("fetched"), 1000);
//     });
// };

// async function getData() {
//     const result = await fetchData();
//     document.write(result);
// }
// getData();

// const person = {
//     id: "Adam",
//     greet: function() {
//         document.write(`Hello, ${this.id}` + "<br>");
//     }
// }

// const persona = {id: "John"};

// const boundGreet = person.greet.bind(persona);

// boundGreet(); // pode ser chamada de 3 formas diferentes
// person.greet.call(persona);
// person.greet.apply(persona);

// function factorial (n) { /////////////////////////////////////////COOL
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(8));

///////////////////////////// ES MODULES ///////////////////////////////////////////////////////////////

                        // Estruturas de ES Modules
                            
                            // export: Declara variáveis, funções ou classes para exportação.
                            // export default: Declara exportação padrão de um módulo.
                            // import: Importa membros exportados de um módulo.
                            // import(): Importa módulo dinamicamente, retorna promessa.
                            // import.meta: Objeto com metadados do módulo (ex.: URL).

                            // Assíncrono: Carregamento de módulos é assíncrono, otimizando performance

                            //TESTES FEITOS DENTRO DO APP.JS E DO MATHUTIL.JS

//file index.html: só funciona o import/export se setar o script para type="module"

// <script src="mathUtil.js" type="module"></script>
//<script src="app.js" type="module"></script>
                        
//file mathUtil.js: onde tem informações, utilizando o export

// export function add(a, b) {
//     return a + b;
// }
// export const PI = 3.14;


//file: app.js: onde a aplicação roda no caso, utilizando import from

// import { add, PI } from './mathUtil.js'; // linha de import, todo item que for usado tem que estar aqui

//     const style = document.createElement('style');
//     style.textContent = `
//         * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         }

//     `;
//     document.head.appendChild(style);  

// document.body.style.backgroundColor = 'grey';
// document.body.style.maxHeight = '100vh';

// const container = document.createElement('div');
// container.style.flexDirection = 'column';
// container.style.alignItems = 'center';
// container.style.justifyContent = 'center';
// container.style.display = 'flex';
// document.body.appendChild(container);

// function writeLine(text) { //adiciona linha jeito 1
//     container.innerHTML += text + "<br>";
// }

// writeLine(add(3, 20));
// writeLine(PI);

// document.body.innerHTML += add(30, 20) + "<br>"; // adiciona linha jeito 2

// const mathUtils = {
//     add: function (a, b) {
//         return a + b;
//     },
// };

// document.body.innerHTML += (mathUtils.add(3, 6));

///////////////////////////// COMMONJS MODULE ///////////////////////////////////////////////////////////

                            // Estruturas de CommonJS
                            // module.exports: Define exportações de um módulo CommonJS.
                            // require(path): Importa módulo CommonJS.

                        // Características:

                            // Síncrono: require carrega módulos de forma síncrona, bloqueando a execução até o módulo estar carregado.
                            // Dinâmico: Permite exportações e importações condicionais ou em runtime.
                            // Escopo Isolado: Cada módulo tem seu próprio escopo, evitando conflitos globais.
                            // Exportação Única: module.exports define o que o módulo exporta (pode ser um objeto, função, ou valor).
                            // Amplamente Usado: Padrão em Node.js até a introdução dos ES Modules (ESM).
                            // Compatibilidade: Node.js suporta ambos, mas ESM requer "type": "module" em package.json ou extensão .mjs.

                        // Configuração no Node.js:

                            // Use extensão .mjs ou defina "type": "module" em package.json para habilitar ESM.
                            // Sem isso, Node.js assume CommonJS.

                        // Observações

                            // .CommonJS: Síncrono, ideal para Node.js legado, usa require/module.exports.
                            // .Limitação: Não nativo em navegadores; menos otimizado que ESM.
                            // .Uso: Projetos Node.js antigos ou pacotes npm legados.
                            // .Suporte: Nativo em Node.js; ESM é preferido em projetos modernos.

// Module.exports
// const module = { exports: {}};

// Define the mathUtils module
// (function (module) {
//     function add(a, b) {
//         return a + b;
//     }
//     module.exports = { add };
// })(module);
// Simulate the Require
// const mathUtils = module.exports;
// Use the add function
// document.body.innerHTML += (mathUtils.add(5, 10)); 

// //Exportando e Importando com CommonJS javascript
// //arquivo: calculadora.js
// module.exports: Exporta um objeto com funções
// module.exports = {
//   somar: (a, b) => a + b,
//   subtrair: (a, b) => a - b
// };

// //arquivo: main.js
// //require: Importa o módulo
// const calculadora = require('./calculadora.js');
// console.log(calculadora.somar(5, 3)); // 8
// console.log(calculadora.subtrair(5, 3)); // 2

// //Exportando um Único Valor javascript
// //arquivo: saudacao.js
// module.exports: Exporta uma função
// module.exports = (nome) => `Olá, ${nome}!`;

// //arquivo: app.js
// const saudar = require('./saudacao.js');
// console.log(saudar("Ana")); // Olá, Ana!

// //Exportação Dinâmica javascript

// //arquivo: config.js

// //Exportação condicional

// const ambiente = process.env.NODE_ENV || "dev";
// module.exports = ambiente === "dev" ? 
//   { apiUrl: "http://localhost:3000" } : 
//   { apiUrl: "https://api.producao.com" };

// //arquivo: main.js
// const config = require('./config.js');
// console.log(config.apiUrl); // Depende do ambiente

// //Usando Módulos Externos javascript

// //arquivo: exemplo.js
// //require: Importa módulo externo (ex.: instalado via npm)

// const lodash = require('lodash');
// console.log(lodash.upperCase("teste")); // TESTE

///////////////////////////// EXTERNAL LIBRARIES ////////////////////////////////////////////////////////

                            // Sintaxes de Importação

                                // require(path): Importa biblioteca CommonJS em Node.js.
                                // import: Importa biblioteca como ES Module.
                                // <script src>: Inclui biblioteca via CDN no navegador.

                            // Ferramentas de Gerenciamento

                                // npm install: Instala biblioteca externa via npm.
                                // yarn add: Instala biblioteca externa via Yarn.
                                // import map: Define mapeamentos para imports no navegador (ES Modules).
                                // vite: Ferramenta de build que otimiza carregamento de bibliotecas.
                                // webpack: Empacota bibliotecas e código para produção.

                            // Métodos de Bibliotecas Populares (Exemplos)

                                // lodash.get(obj,path,default): Acessa propriedade aninhada com valor padrão.
                                // axios.get(url,config): Faz requisição HTTP GET, retorna promessa.
                                // moment().format(format): Formata data/hora atual conforme padrão.
                                // react.useState(initial): Gerencia estado em componentes React.

                            // Observações

                                // Contexto: Bibliotecas externas ampliam funcionalidades via npm/CDN.
                                // Uso: CommonJS para Node.js legado, ESM para moderno, CDN para navegadores.
                                // Suporte: Depende da biblioteca; npm/Yarn universais.

                                // USANDO O LODASH

                            // Métodos de Array

                                // .chunk(array,size): Divide array em pedaços de tamanho especificado.
                                // .compact(array): Remove valores falsy do array.
                                // .difference(array,...values): Retorna valores do array não presentes em outros arrays.
                                // .drop(array,n): Remove primeiros n elementos do array.
                                // .uniq(array): Retorna array com valores únicos.
                                // .flatten(array): Achata array aninhado em um nível.
                                // .zip(...arrays): Combina arrays em array de tuplas.

                            // Métodos de Objeto

                                // .get(object,path,default): Acessa propriedade aninhada com valor padrão.
                                // .set(object,path,value): Define valor em propriedade aninhada.
                                // .has(object,path): Verifica se propriedade aninhada existe.
                                // .pick(object,paths): Cria objeto com propriedades selecionadas.
                                // .omit(object,paths): Cria objeto sem propriedades especificadas.
                                // .merge(target,...sources): Mescla objetos profundamente.

                            // Métodos de Função

                                // .debounce(func,wait,options): Atrasar execução de função após wait ms.
                                // .throttle(func,wait,options): Limita execução de função a cada wait ms.
                                // .once(func): Garante que função seja executada apenas uma vez.
                                // .memoize(func,resolver): Armazena resultados de função em cache.

                            // Métodos de Coleção

                                // .map(collection,iteratee): Aplica função a cada elemento, retorna novo array.
                                // .filter(collection,predicate): Retorna elementos que passam no teste.
                                // .reduce(collection,iteratee,accumulator): Reduz coleção a um valor.
                                // .groupBy(collection,iteratee): Agrupa elementos por critério.
                                // .keyBy(collection,iteratee): Cria objeto com chaves geradas por iteratee.

                            // Métodos de String

                                // .camelCase(string): Converte string para camelCase.
                                // .kebabCase(string): Converte string para kebab-case.
                                // .snakeCase(string): Converte string para snake_case.
                                // .trim(string,chars): Remove caracteres do início/fim da string.

                            // Métodos de Utilidade

                                // .cloneDeep(value): Clona valor profundamente.
                                // .isEqual(value,other): Compara valores profundamente.
                                // .isEmpty(value): Verifica se valor está vazio.
                                // .random(min,max,floating): Gera número aleatório entre min e max.

// const array = [1, 2, 3, 4, 5, 6];
// const chunkedArray = _.chunk(array, 1) // Usando o chunk;
// document.body.innerHTML += ("_.chunk: " + chunkedArray + "<br>");

// const capitalizedString = _.capitalize('hello world'); // Usando o capitalize
// document.body.innerHTML += ("_.capitalize: " + capitalizedString + "<br>");

// const shuffledArray = _.shuffle(array); // Usando o shuffle
// document.body.innerHTML += ("_.shuffle: " + shuffledArray + "<br>");

// const duplicateArray = [1, 2, 2, 3, 4, 4, 4, 5, 6];
// const uniqueArray = _.uniq(duplicateArray); // Usando o Uniq
// document.body.innerHTML += ("_.uniq: " + uniqueArray + "<br>");

///////////////////////////// INHERITANCE //////////////////////////////////////////////////////////////

                        // Estruturas de Herança Baseadas em Protótipos

                            // Object.create(proto): Cria objeto com protótipo especificado.
                            // .prototype: Objeto que define métodos/propriedades herdados por instâncias.
                            // .proto: Acessa/define protótipo de um objeto (obsoleto).
                            // Object.getPrototypeOf(obj): Retorna protótipo do objeto.
                            // Object.setPrototypeOf(obj,proto): Define protótipo do objeto.

                        // Estruturas de Herança Baseadas em Classes

                            // class: Define uma classe com construtor e métodos.
                            // extends: Define herança de uma classe base.
                            // super: Chama construtor ou métodos da classe pai.
                            // static: Define métodos/propriedades estáticos na classe.

// function Animal(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }
// Animal.prototype.speak = function () { 
//     document.body.innerHTML += `${this.name} makes a noise. <br>`;
// };
// function Dog (name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// // Inherit de Animal
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // Add additional methods to Dog
// Dog.prototype.bark = function () { 
//     document.body.innerHTML += `${this.name} barks. <br>`
// };

// // Add additional methods to Dog
// Dog.prototype.race = function () { 
//     document.body.innerHTML += `${this.breed} is his breed. <br>`
// };

// const dog = new Dog('Joao', 'Caramelo');

// dog.speak();
// dog.bark();
// dog.race();

// const animal = {
//     speak: function() {
//         document.body.innerHTML += `${this.name} is a fucking fuck mf.`;
//     }
// };

// const dogg = Object.create(animal);

// dogg.name = "buddy";
// dogg.speak();


          ////////////////// CLASS PROJECT 1 ///////////////////////

// let fruits = ["Orange", "Apple", "Strawberry"]; // Itera o Array

// for (let fruit of fruits) { // retorna cada item separado
//     document.body.innerHTML += (fruit + "<br>"); // mostra na tela
// };


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // itera o array
// let sum = 0; // define sum

// for (let num of numbers) { // separa os itens do array
//     sum += num; // sum = sum + num; // retorna a soma do total dos valores do array
// }

// document.body.innerHTML += ("Sum: " + sum + "<br>"); // mostra na tela

// let scores = [11, 22, 33, 44, 55, 66, 77]; // itera o array
// let highScores = []; // não define itens no array para serem definidos depois

// for (let score of scores) { // separa os itens do array
//     if (score > 50) { // retorna só o que passa no teste
//         highScores.push(score); // adiciona os itens que atendem ao if no array highScores
//     }
//     document.body.innerHTML += (highScores + "<br>"); // mostra na tela
// }

          ////////////////// BRINCANDO 1 ///////////////////////

// let numbers = [1, 9.869604401089358, 20, 30, 40]; // itera os itens do array
// let sqrt = []; // não define itens para serem definidos depois

// for (let num of numbers) { // separa os itens do array
//     sqrt.push(Math.sqrt(num)); // calcula a raiz quadrada e aloca cada item no array sqrt
// }

// document.body.innerHTML += `A raiz quadrada dos números são os seguinte valores: <br><br>

// A: ${sqrt[0]} <br>
// B: ${sqrt[1]} <br>
// C: ${sqrt[2]} <br>
// D: ${sqrt[3]} <br>
// E: ${sqrt[4]} <br>
// `;

//ou

// let numbers1 = [1, 9.869604401089358, 20, 30, 40];
// let add = numbers1.map(num => (Math.sqrt(num)) + "<br>");
// document.body.innerHTML += add;

          ////////////////// CLASS PROJECT  ///////////////////////

// function add (a, b) { // jeito 1
//     return a + b;
// }

// const add = (a, b) => a + b + "<br>"; // jeito 2
// const subtract = (a, b) => a - b + "<br>";
// const multiply = (a, b) => a * b + "<br>";
// const divide = (a, b) => a / b + "<br>";
// const greet = (name) => `Sup ${name}, whats up? <br>`;
// const bye = (name) => `Goodbye ${name}, die you fucking bitch`;

// document.body.innerHTML += (add(3, 4));
// document.body.innerHTML += (subtract(3, 4));
// document.body.innerHTML += (multiply(3, 4));
// document.body.innerHTML += (divide(3, 4));
// document.body.innerHTML += (greet("adam"));
// document.body.innerHTML += bye("adam");


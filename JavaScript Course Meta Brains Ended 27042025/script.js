                        //JAVASCRIPT COURSE

// var test0 = ("<h1>hello</>"); // html pode ser usado em strings
// document.write((test0)); // comando para dar print em texto

                        //variáveis
// var test1 = 24; // declaração de valor por linha, pode ser declarada varias vezes, cada linha em var mudará o valor da variavel

// let test2 = 23; // pode ser declarada 1 vez somente, mas o seu valor pode mudar

// const test3 = 22; // pode ser declarada somente 1 vez e seu valor não muda

                        // podem ser locais se declaradas em funcoes ou globais se declaradas fora.

                        //console
// var console1 = ["test1", "test2", "test3"];
// console.log("escrever algo no console"); //console em string

// console.log(console1); //console em var

// console.error(console1); //aparece como erro

// console.info(console1); //aparece como informação

// console.warn(console1); // aparece como alerta

// console.table(console1); //console em tabela com indice

// console.clear(); //limpa o console



                        //funções
// function test() { // Declarar função
//     var x = 50;
//     document.write(x);
// }
// test(); // Chamar função

//                         //IF ELSE IF
// a = 30;
// b = 30;

// //  ==(igual), +=(a=a+b), -=(a=a-b), >=(maior ou igual), <=(menor ou igual),
// //  !=(diferente, ignora tipo) ===(igual, considera tipo str=>str), !==(diferente, considera tipo str=>str), x++(acrescenta 1), x--(decrementa)
// //  || (OR), && (AND), !(NOT)

// if (a > b) {
//         document.write("a > b");
//     } else if  (a == b) { 
//         document.write("a = b");
//     } else {
//         document.write("a < b");
//     }

                            //ternary statement(basicamente um if else na mesma linha, o ? atua como uma pergunta e depois do : vem as respostas)
// var x = 200;
// var y;
// x == 201 ? (y="yes") : (y = "no");
// document.write(y);
                            //ou
// y = "value: " + (x == 200 ? "yes" : "no");
// document.write(y);

                            //SWITCH, varios comandos diferentes para a mesma var
// var day = 1;
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

                            // FOR, BREAK, CONTINUE, repetição de qualquer variavel, array, etc
// for (let i = 10; i >= 0; i--) {
//     document.write("No: " + i + "<br>");
// }
// for (let i = 0; i <= 10; i++) {
//     document.write("No: " + i + "<br>");
// }
// for (let i = 0; i <= 10; i++) {
//  if (i == 3) {
//  document.write("This one: " + i + "<br>");
//  continue; //faz com que a contagem continue, mas sem repetir o numero desejado no if
//  break; //faz com que a contagem pare no numero desejado;
// }
    // document.write("No: " + i + "<br>"); //continua contando e ignora o if, mas fica repetido o valor do if
// }

                            //DATA TYPES, string(""), number, boolean(true, false), 
                            // array ["1","2","3"] se ordem for importante,
                            // object{first:"1", last:"2"}se ordem nao for importante, undefined, null
                            // typeof mostra o tipo de data
// var hi = "hi bro";
// document.write(hi);
// document.write(typeof hi);

                //array
// var hio = ["hi", "bro", "sup"];

                //object
// var hio1 = { 
//     firstName: "k",
//     middleName: "o",
//     lastName: "d",
// };

// document.write(hio[1], "<br>"); // requisitar somente 1 item do array

// document.write(hio1.firstName); // requisitar somente 1 item do object

                            // Arithmetic Operations
                            //Addition(+), Subtractrion(-), Multiplication (*), Exponentiation (**),
                            //Division (/), Modulus(Restante da /)(%), Increment(++), Decrement(--);
// var a = 20; // pode ser declarada com nome var ou sem
//b = 30;
// c = a + b;
// c = a - b;
// c = a * b;
// c = a / b;
// c = a % b;
// c = a ** b;
//document.write(c);

                            // Assignment operator
                            // +=(X+=Y(X=X+Y)), -=(X-=Y(X=X-Y)), *=(X*=Y(X=X*Y)), **=(X**=Y(X=X**Y)),
                            // /=(X/=Y(X=X/Y)), %=(X%=Y(X=X%Y)), =(X=Y).
// var a = 20;
// var b = 10;
//a+=b;
//a-=b;
//a*=b;
//a/=b;
//a**=b;
//a%=b;
// document.write(a);

                            // Comparison Operations
                            // == equal to, === equal to and same data type, != not equal to,
                            // !== not equal to and not the same data type, > greaten than,
                            // < less than, >= greater than and equal, < less than and equal.
// var a = 20;
// var b = 10;
// document.write(a == b);
// document.write(a === b);
// document.write(a != b);
// document.write(a !== b);
// document.write(a < b);
// document.write(a > b);
// document.write(a >= b);
// document.write(a <= b);

                            // alert box
// let a;
// let b;
// a = 10;
// b = 10;

// if (a === b ) {
//     alert("A = B");
// }
                            //confirm box
// var a = confirm("Are You Human?");
// if (a) {
//     alert("nice");
// } else {
//     alert("not nice");
// }
                            // Promp box
// var a = prompt("you suck?");
// document.write(a);

                            //FUNCTIONS

                            //definição e chamada de função
// function abc () {
//     document.write("test1");
// }
// abc();

                            // função com parametros

// function abc (first, last) {
//     document.write("text1 " + "", first + last);
// }
// abc("Hello", "World");
                            // função com return
    
// if (isNaN(a.value) || isNaN(b.value) || a.value === "" || b.value === "") {
//     alert("Invalid Values!");
//     a.value = "";
//     b.value = "";
//     return;
// }

                            //EVENTS
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

// document.getElementById("testButton").addEventListener("click", fun);                           
// document.getElementById("testButton").addEventListener("dblclick", fun);                           
// document.getElementById("testButton").addEventListener("mouseover", fun);                           
// window.addEventListener("resize", fun);                           
// function fun () {
//     alert("clicked");
// }

                            // Loops
// var a = 1;
// while (a <= 20) {
//     document.write("test<br>");
//     var a = a + 1;
// }

                            // do while loop
// var a = 1;

// do {
//     document.write(a + ") test<br>");
//     a++;
//     // a = a + 1;
// } while (a <= 20);

                            // for loop
// for (var a = 1; a <=10; a++) {
//     document.write(a + ") hello<br>");
// }

                            // nested loops
                            //fazer loops em loops
// for (var a = 1; a <= 100; a = a + 10) {
//     for (var b = a; b < a + 10; b++) {
//         document.write(b + "<br>");
//     }
//     document.write("<br>");
// };

                            // ARRAYS 
// var array = [10, 20, 30, 40, 50, 60, 70];
// for (var a = 0; a <= 5; a++) {
//     document.write(array[a] + "<br>");
// }

                            // MODIFY AND DELETE ARRAY
// var a = ["john", 50, "Doe"];
// document.write(a + "<br>");   
//                             // modify
// a[0]  = "muneed";    
// document.write( a + "<br>");
//                             // delete
// delete a[1];
// document.write( a + "<br>");

                            // SORT AND REVERSE ARRAY
// var a = ["cf", "test", "one"];      
                            // SORT
                            // Organizar alfabeticamente
// document.write(a + "<br>");                      
// a.sort();
// document.write(a);         
// a.reverse();
// document.write(a);      

                            // POP AND PUSH ARRAY
                            // POP deleta ultimo, PUSH aloca outro no lugar
// var a = [1, 2, 3, 4, 5];
// document.write(a + "<br>");
// a.pop();                    
// a.push(10);
// document.write(a + "<br>");

                            // SHIFT AND UNSHIFT ARRAY
                            // SHIFT deleta o primeiro, UNSHIFT aloca outro no lugar
var arr = [9, 3, 4, 5, 6, 7, 2, 8, 1, 0];
// document.write(arr);
// document.write(a + "<br>");
// a.shift();  
function removeSmallest(arr) {
    arr.sort();
    if(arr == " "){
        return arr = "[]";
    }
    return arr.shift();
}          


// document.write(a + "<br>");
// a.unshift(10);
// document.write(a + "<br>");

                            // CONCAT AND JOIN ARRAY
                            // CONCAT junta varios arrays em 1
                            // JOIN altera o , do array pelo q for definido
// var a = [1, 2, 3, 4];
// var b = ["pedro", "jose", "maria", "euclides"];
// var c = a.concat(b);
// document.write(c + "<br>");
// var d = c.join(" / "); //<---
// document.write(d + "<br>");

                            // SLICE AND SPLICE ARRAY
                            // SLICE remove a partir do que for definido
                            // splice, define o valor de
// var a = [1, 2, 3, 4, 5];
// document.write(a + "<br>");
// var b = a.slice(3); //<---
// document.write(b + "<br>");
// a.splice(2, 0, 1, 100, 70);
// document.write(a + "<br>");

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

                            //FOREACH ARRAY
                            // Realiza uma ação para cada item do array
// var a = [10, 20, 30, 40];
// a.forEach(loop);
// function loop(value, index) {
//     document.write(index + " " + value + "<br>");
// }             

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

                            // INCLUDE array
                            // diz se tem o valor dentro do array
                            // true ou false
// var a = [10, 20, 30, 40, 50];
// document.write(a + "<br>");
// var b = a.includes(30);
// document.write(b + "<br>");

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

                            // OBJECTS
                            // this. serve para chamar dentro do object
                            // estas são 2 formas de se declarar object
    //forma 1                            
// var a = {
//     firstName: "Jon",
//     lastName: "Jones",
//     age: 30,
//     email: "someone@gmail.com",
//     movies: ["a", "b", "c"],
//     income: function () {
//         return 25000;
//     },
//     FUN: function () {
//         return this.name + " " + this.lastName;
//     },
// };
// document.write("Nome: " + a.firstName + " ");
// document.write(a.lastName + ", " + "Idade: ");
// document.write(a.age + ", email: ");
// document.write(a.email + ".");
// console.log(a);

    //forma 2
// var a = new Object();
// a.firstName = "Jon";
// a.lastName = "Jones";
// a.age = 30;
// a.email = "someone@gmail.com";

// document.write("Nome: " + a.firstName + " ");
// document.write(a.lastName + ", " + "Idade: ");
// document.write(a.age + ", email: ");
// document.write(a.email + ".");
// console.log(a);

                            //ARRAYS OBJECTS
// var a = [
//     {
//         firstName: "Jon",
//         lastName: "Jones",
//         age: 30,
//         email: "someone@gmail.com",
//         movies: ["Suck", " " + "It", " " + "Up"],
//     },
//     {
//         firstName: "Con",
//         lastName: "Cajones",
//         age: 45,
//         email: "someday@gmail.com",
//         movies: ["Stuck", " " + "This", " " + "Cup"],
//     },
//     {
//         firstName: "Don",
//         lastName: "Corleone",
//         age: 50,
//         email: "somebody@gmail.com",
//         movies: ["Cup", " " + "In", " " + "Butt"],
//     },
// ];        

// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// for (var b = 0; b < a.length; b++) {
//     document.write("Name: " + a[b].firstName + " " +
//          a[b].lastName +", Age: " + a[b].age + ", Email: " +
//         a[b].email + ", Favorite Movies: " + a[b].movies + ". <br>");
    
// }
                            // FOR IN OBJECTS
                            // for (const key in object) {
                            //     if (Object.prototype.hasOwnProperty.call(object, key)) {
                            //         const element = object[key];
                                    
                            //     }
                            // }
// var a = {
//     firstName: "Jon",
//     lastName: "Bones",
//     age: 30,
//     email: "somebody@gmail.com",
//     movies: ["Cup", " " + "In", " " + "Butt"],
// };
// for (var key in a) {
//         document.write(key + ": " + a[key] + "<br>");
// }
                            // STRING METHODS
                            //1. Acessar Caracteres/Substrings

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

                            //NUMBER METHODS
                            //1. Métodos de Instância

                            // .toFixed(digits): Formata número com digits casas decimais, retorna string.
                            // .toPrecision(precision): Formata número com precision dígitos significativos, retorna string.
                            // .toExponential(fractionDigits): Formata número em notação exponencial com fractionDigits decimais, retorna string.
                            // .toString(radix): Converte número para string na base radix (2 a 36).
                            // .toLocaleString(locales, options): Formata número conforme localidade, retorna string.
                            // .valueOf(): Retorna o valor primitivo do número.
                        
                        // 2. Métodos Estáticos
                        
                            // .isFinite(number): Verifica se number é finito (true/false).
                            // .isInteger(number): Verifica se number é inteiro (true/false).
                            // .isNaN(number): Verifica se number é NaN (true/false).
                            // .isSafeInteger(number): Verifica se number é um inteiro seguro (±2⁵³-1).
                            // .parseFloat(string): Converte string em número de ponto flutuante.
                            // .parseInt(string, radix): Converte string em número inteiro na base radix.

// var x = "test";
// var a = "100.23298476298"; // variavel em string
// var b = parseFloat(a); // converte variável em number float
// var c = parseInt(a); // converte variável em number integer
// var d = Number(a);  // converte variável em number
// var e = String(a); // converte variável em string
// var f = Number.isFinite(a); // verifica é finito
// var g = Number.isInteger(a); // verifica se é integer
// var h = isNaN(a); // verifica se não é um número
// var i = Number.isSafeInteger(a); // verifica se é safeInteger
// var j = b.toFixed(3); // quantos digitos vai mostrar depois do .
// var k = b.toPrecision(4); // arredonda os número depois do .

// document.write( "a: " + typeof a + ", Value: " + a + "<br>");
// document.write( "b: " + typeof b + ", Value: " + b + "<br>");
// document.write( "c: " + typeof c + ", Value: " + c + "<br>");
// document.write( "d: " + typeof d + ", Value: " + d + "<br>");
// document.write( "e: " + typeof e + ", Value: " + e + "<br>");
// document.write( "f: " + typeof f + ", Value: " + f + " para isFinite<br>");
// document.write( "g: " + typeof g + ", Value: " + g + " para isInteger<br>");
// document.write( "h: " + typeof h + ", Value: " + h + " para isNaN<br>");
// document.write( "i: " + typeof i + ", Value: " + i + " para isSafeInteger<br>");
// document.write( "j: " + typeof i + ", Value: " + j + " para toFixed<br>");
// document.write( "k: " + typeof i + ", Value: " + k + " para toPrecision<br>");

                            //MATH METHODS
                            //1. Constantes

                                // .E: Constante de Euler (≈2.718).
                                // .LN2: Logaritmo natural de 2 (≈0.693).
                                // .LN10: Logaritmo natural de 10 (≈2.303).
                                // .LOG2E: Logaritmo de E na base 2 (≈1.443).
                                // .LOG10E: Logaritmo de E na base 10 (≈0.434).
                                // .PI: Constante π (≈3.14159).
                                // .SQRT1_2: Raiz quadrada de 1/2 (≈0.707).
                                // .SQRT2: Raiz quadrada de 2 (≈1.414).

                            //2. Aritméticos

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

                            //3. Trigonométricos

                                // .sin(x): Retorna o seno de x (em radianos).
                                // .cos(x): Retorna o cosseno de x (em radianos).
                                // .tan(x): Retorna a tangente de x (em radianos).
                                // .asin(x): Retorna o arco-seno de x (em radianos).
                                // .acos(x): Retorna o arco-cosseno de x (em radianos).
                                // .atan(x): Retorna o arco-tangente de x (em radianos).
                                // .atan2(y, x): Retorna o ângulo entre o eixo x e o ponto (x, y).

                            //4. Logarítmicos e Exponenciais

                                // .exp(x): Retorna E elevado a x.
                                // .expm1(x): Retorna E elevado a x menos 1.
                                // .log(x): Retorna o logaritmo natural de x.
                                // .log1p(x): Retorna o logaritmo natural de 1 + x.
                                // .log2(x): Retorna o logaritmo de x na base 2.
                                // .log10(x): Retorna o logaritmo de x na base 10.

                            //5. Aleatórios

                                // .random(): Gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).

                            //6. Outros

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

                            //DATE METHODS
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

                            //DOM MODEL/TREE
                                //HTML Root Element
                            //Parent: Head (HTML First Child Element)
                                //child: Tittle, Meta, Link
                            //Parent: Body (HTML Last Child Element)
                                //Child: Header, Main, Section, Article, Footer, etc. 
                            //Parent: Main
                                //Child h1, p, input, button, etc.
                                    //Attributes
                                    
                            //TARGET DOM OBJECTS
                            //Métodos de Seleção de Elementos do Document

                            // .getElementById(id): Retorna o elemento com o id especificado ou null.
                            // .getElementsByClassName(className): Retorna uma coleção de elementos com a classe especificada.
                            // .getElementsByTagName(tagName): Retorna uma coleção de elementos com a tag especificada.
                            // .getElementsByName(name): Retorna uma coleção de elementos com o atributo name especificado.
                            // .querySelector(selector): Retorna o primeiro elemento que corresponde ao seletor CSS ou null.
                            // .querySelectorAll(selector): Retorna uma coleção de todos os elementos que correspondem ao seletor CSS.

// document.write(`Testing String Methods<br>
//     <input type="text" id="inputText" placeholder="Input word here: "></input><br>
//     <button id="testButton">Calculate</button>`);

// var a = document.getElementById("inputText");
// var c = document.getElementById("testButton").addEventListener("click", calculate);                           
                         
                            //DOM GET METHODS
                            //Propriedades e Métodos de Acesso (Get) no DOM

                            // .innerText: Retorna ou define o texto visível de um elemento, sem tags.
                            // .innerHTML: Retorna ou define o conteúdo HTML de um elemento, incluindo tags.
                            // .textContent: Retorna ou define todo o texto de um elemento, incluindo conteúdo oculto, sem tags.
                            // .outerHTML: Retorna ou define o HTML do elemento, incluindo a própria tag do elemento.
                            // .outerText: Retorna ou define o texto visível do elemento, similar a .innerText (obsoleto).
                            // .getAttribute(name): Retorna o valor do atributo name ou null se não existir.
                            // .id: Retorna ou define o valor do atributo id do elemento.
                            // .className: Retorna ou define o valor do atributo class do elemento como string.
                            // .classList: Retorna uma coleção de classes do elemento como DOMTokenList.
                            // .tagName: Retorna o nome da tag do elemento em maiúsculas.
                            // .nodeName: Retorna o nome do nó (tag para elementos, ex.: DIV).
                            // .nodeValue: Retorna ou define o valor do nó (para texto ou comentários, null para elementos).
                            // .nodeType: Retorna o tipo do nó (ex.: 1 para elemento, 3 para texto).
                            // .parentNode: Retorna o nó pai do elemento.
                            // .parentElement: Retorna o elemento pai ou null se não for um elemento.
                            // .childNodes: Retorna uma coleção de todos os nós filhos, incluindo texto e comentários.
                            // .children: Retorna uma coleção apenas dos elementos filhos.
                            // .firstChild: Retorna o primeiro nó filho ou null.
                            // .firstElementChild: Retorna o primeiro elemento filho ou null.
                            // .lastChild: Retorna o último nó filho ou null.
                            // .lastElementChild: Retorna o último elemento filho ou null.
                            // .nextSibling: Retorna o próximo nó irmão ou null.
                            // .nextElementSibling: Retorna o próximo elemento irmão ou null.
                            // .previousSibling: Retorna o nó irmão anterior ou null.
                            // .previousElementSibling: Retorna o elemento irmão anterior ou null.
                            // .attributes: Retorna uma coleção dos atributos do elemento.
                            // .value: Retorna ou define o valor de elementos de formulário (ex.: <input>).
                            // .checked: Retorna ou define o estado de um checkbox/radio (true/false).
                            // .selected: Retorna ou define o estado de uma opção em <select> (true/false).
                            // .style: Retorna ou define os estilos CSS inline do elemento como objeto.

// var a = document.getElementById("sidebar").innerText; // retorna o texto do elemento
// console.log(a);  
// var b = document.getElementById("header").innerHTML; // retorna o html do elemento
// console.log(b);
// var c = document.getElementById("sidebar").textContent; // retorna o texto do elemento, incluindo o que está oculto
// console.log(c);
// var d = document.getElementById("header").outerHTML; // retorna o texto html completo do elemento
// console.log(d);
// var e = document.getElementById("sidebar").outerText; // retorna o texto completo do elemento (obsoleto =innerText)
// console.log(e);
// var f = document.getElementById("header").getAttribute("style"); // retorna o atributo do elemento, style, class, etc.
// console.log(f);

                            //DOM STYLING
                             //funciona somente se for indicado no proprio html
// var a = document.querySelector("#header").style.borderBottom;
// var b = document.querySelector("#header").style.color;
//                             //mudando o parametro:
// var c = document.querySelector("#header").style.backgroundColor = "grey";                           
// console.log(a);                            

                            //DOM EVENTS
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

                        //metodo 1
// var a = document.getElementById("header").onclick = AFun; // aciona quando clicado
// function AFun() {
//     document.getElementById("header").style.background = "blue";
// }
                        //metodo 2
// var b = document.getElementById("header").addEventListener("click", BFun); // aciona quando clicado
// function BFun() {
//     document.getElementById("header").style.background = "blue";
// }
                        //metodo 3
// var c = document.getElementById("header").addEventListener("click", function CFun() {
//     document.getElementById("header").style.background = "blue";
//     document.getElementById("header").style.color = "green";
// });

                            //DOM useCapture
                            // Captura: O evento desce da raiz (Window) até o elemento-alvo.
                            // Alvo: O evento atinge o elemento que o disparou.
                            // Borbulhamento: O evento sobe do elemento-alvo de volta à raiz.

                            // Uso de useCapture:

                            // Se useCapture for true, o ouvinte é acionado durante a fase de captura (descendo pelo DOM).
                            // Se useCapture for false (padrão), o ouvinte é acionado durante a fase de borbulhamento (subindo pelo DOM).

// document.querySelector("#wrapper").addEventListener("dblclick", function () {
//         alert("this is the wrapper");
//     }, true
// );     

// document.querySelector("#header").addEventListener("dblclick", function () {
//         alert("this is a header");
//     }, false
// );                       
                            // DOM CLASSLIST METHOD
                            // Métodos de classList

                            // .add(...classNames): Adiciona uma ou mais classes ao elemento.
                            // .remove(...classNames): Remove uma ou mais classes do elemento.
                            // .toggle(className, force): Alterna uma classe (adiciona se ausente, remove se presente); force define adicionar (true) ou remover (false).
                            // .contains(className): Verifica se o elemento possui a classe especificada (true/false).
                            // .replace(oldClass, newClass): Substitui uma classe existente por outra.
                            // .item(index): Retorna a classe no índice especificado ou null.
                            // .entries(): Retorna um iterador com pares [índice, classe].
                            // .forEach(callback): Executa uma função para cada classe.
                            // .keys(): Retorna um iterador com os índices das classes.
                            // .values(): Retorna um iterador com os nomes das classes.
                            // .length: Retorna o número de classes (propriedade, não método).

// // Elemento de exemplo
// const elemento = document.getElementById("meuElemento");

// // .add(...classNames): Adiciona uma ou mais classes ao elemento.
// elemento.classList.add("ativo", "destaque"); // Adiciona as classes "ativo" e "destaque"
// // Resultado: <div id="meuElemento" class="ativo destaque">Conteúdo</div>

// // .remove(...classNames): Remove uma ou mais classes do elemento.
// elemento.classList.remove("ativo"); // Remove a classe "ativo"
// // Resultado: <div id="meuElemento" class="destaque">Conteúdo</div>

// // .toggle(className, force): Alterna uma classe (adiciona se ausente, remove se presente); force define comportamento.
// elemento.classList.toggle("escondido"); // Adiciona "escondido" se não estiver, remove se estiver
// elemento.classList.toggle("escondido", true); // Força adicionar "escondido"
// // Resultado (após toggle com true): <div id="meuElemento" class="destaque escondido">Conteúdo</div>

// // .contains(className): Verifica se o elemento possui a classe especificada (true/false).
// console.log(elemento.classList.contains("destaque")); // true
// console.log(elemento.classList.contains("inativo")); // false

// // .replace(oldClass, newClass): Substitui uma classe existente por outra.
// elemento.classList.replace("destaque", "novoEstilo"); // Substitui "destaque" por "novoEstilo"
// // Resultado: <div id="meuElemento" class="novoEstilo escondido">Conteúdo</div>

// // .item(index): Retorna a classe no índice especificado ou null.
// console.log(elemento.classList.item(0)); // "novoEstilo"
// console.log(elemento.classList.item(2)); // null (índice fora do alcance)

// // .entries(): Retorna um iterador com pares [índice, classe].
// for (let entrada of elemento.classList.entries()) {
//   console.log(entrada); // [0, "novoEstilo"], [1, "escondido"]
// }

// // .forEach(callback): Executa uma função para cada classe.
// elemento.classList.forEach(classe => console.log(classe)); // "novoEstilo", "escondido"

// // .keys(): Retorna um iterador com os índices das classes.
// for (let indice of elemento.classList.keys()) {
//   console.log(indice); // 0, 1
// }

// // .values(): Retorna um iterador com os nomes das classes.
// for (let classe of elemento.classList.values()) {
//   console.log(classe); // "novoEstilo", "escondido"
// }

// // .length: Retorna o número de classes (propriedade, não método).
// console.log(elemento.classList.length); // 2

                            //DOM PARENT NODES

                            // .parentNode: Retorna o nó pai do elemento ou null se não houver, funciona em ID
                            // em parents como head, body, html, etc.
                            // .parentElement: Retorna o elemento pai ou null se o pai não for um elemento.

// var one = document.getElementById("header").parentElement;
// var one = document.getElementById("main").parentNode;
// console.log(one);

// document.getElementById("header").parentElement.style.backgroundColor = "red";

                            //DOM CHILDREN NODES

                            //Propriedades/Métodos de Nós Filhos (Children Nodes)

                            // .childNodes: Retorna uma coleção de todos os nós filhos, incluindo texto e comentários.
                            // .children: Retorna uma coleção apenas dos elementos filhos (exclui texto e comentários).
                            // .firstChild: Retorna o primeiro nó filho ou null se não houver.
                            // .firstElementChild: Retorna o primeiro elemento filho ou null se não houver.
                            // .lastChild: Retorna o último nó filho ou null se não houver.
                            // .lastElementChild: Retorna o último elemento filho ou null se não houver.

// var one = document.getElementById("content").children; 
// console.log(one);
// var two = document.getElementById("content").children[1]; 
// console.log(two);
// var three = document.getElementById("content").children; 
// console.log(three);
// var four = document.getElementById("content").firstChild; 
// console.log(four);
// var five = document.getElementById("content").lastChild; 
// console.log(five);
// var six = document.getElementById("content").childNodes; 
// console.log(six);

// var seven = document.getElementById("content").firstElementChild.style.backgroundColor = "red"; 
// var eight = document.getElementById("content").lastElementChild.style.backgroundColor = "red"; 
// var nine = document.getElementById("content").children[0].style.backgroundColor = "red"; 
// var ten = document.getElementById("content").childNodes[1].style.color = "red"; 
// var eleven = document.getElementById("content").childNodes[3].style.color = "green"; 
// var twelve = document.getElementById("content").childNodes[5].style.color = "blue"; 

                            // NEXT AND PREVIOuS SIBLINGS
                            // .nextSibling: Retorna o próximo nó irmão ou null se não houver.
                            // .previousSibling: Retorna o nó irmão anterior ou null se não houver.
                            // .nextElementSibling: Retorna o próximo elemento irmão ou null se não houver.
                            // .previousElementSibling: Retorna o elemento irmão anterior ou null se não houver.

// var one = document.getElementById("content").nextElementSibling; 
// console.log(one);   
// var two = document.getElementById("content").previousElementSibling; 
// console.log(two);

                            // CREATE ELEMENT TEXT NODE
                            // Métodos de Criação de Elementos e Nós de Texto

                            // .createElement(tagName, options): Cria um elemento com a tag especificada (ex.: div).
                            // .createTextNode(text): Cria um nó de texto com o conteúdo especificado.
                            // .createDocumentFragment(): Cria um fragmento de documento vazio para agrupar nós.
                            // .createComment(text): Cria um nó de comentário com o texto especificado.

// var element = document.createElement("test");
// console.log(element);                            
// var text = document.createTextNode("test");
// console.log(text);
// var comment = document.createComment("test");
// console.log(comment);


                            //DOM CREATE AND APPEND METHODS
                            //Métodos de Criação

                            // .createElement(tagName, options): Cria um elemento com a tag especificada (ex.: div).
                            // .createTextNode(text): Cria um nó de texto com o conteúdo especificado.
                            // .createDocumentFragment(): Cria um fragmento de documento vazio para agrupar nós.
                            // .createComment(text): Cria um nó de comentário com o texto especificado.

                            //Métodos de Inserção

                            // .appendChild(node): Adiciona um nó como último filho de um elemento.
                            // .append(...nodes): Adiciona nós ou strings como últimos filhos de um elemento.
                            // .prepend(...nodes): Adiciona nós ou strings como primeiros filhos de um elemento.
                            // .insertBefore(newNode, referenceNode): Insere um nó antes do nó de referência especificado.
                            // .replaceChild(newNode, oldNode): Substitui um nó filho por outro.
                            // .insertAdjacentElement(position, element): Insere um elemento em uma posição relativa ao elemento (beforebegin, afterbegin, beforeend, afterend).
                            // .insertAdjacentHTML(position, html): Insere HTML como nós em uma posição relativa ao elemento.
                            // .insertAdjacentText(position, text): Insere texto como nó de texto em uma posição relativa ao elemento.
                            
// var header = document.getElementById("header");
// var target = document.getElementById("uList");
// console.log(target);
// target.insertBefore(header, target.childNodes[3]); // altera a posição
                          
// var testButton = document.createElement('button');
// testButton.textContent = 'testButton';
// testButton.style.padding = "5px";
// testButton.style.margin = "5px";
// testButton.style.position = "fixed";
// testButton.style.top = "10px";
// testButton.style.right = "10px";
// testButton.style.fontSize = "20px";
// testButton.addEventListener("click", function () {
//     alert("you suck");
// });

// var header = document.getElementById("header");
// var textSpan = document.createElement("span");
// textSpan.textContent = "You Suck";
// textSpan.style.padding = "2px";
// textSpan.style.fontSize = "24px";
// textSpan.style.position = "absolute";
// textSpan.style.top = "10px";
// textSpan.style.left = "10px";

// // textSpan.appendChild(text);
// // header.appendChild(textSpan);
// header.appendChild(testButton); //usado para chamar o elemento
// header.appendChild(textSpan); //usado para chamar o elemento

// // header.prepend(testButton); //usado para chamar o elemento
// // header.appendChild(testButton); //usado para chamar o elemento


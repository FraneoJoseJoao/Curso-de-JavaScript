// document.getElementById("text").innerHTML = "Meu primeiro texto <b>JS</b>!";

// Alertas da pagina
// alert("Alerta Visivel");
// console.log("Esse é um alerta silencioso que aparace quando inspencionamos o site");

// Sintaxe

// Podemos declarar variaveis com: var, let, const

// No JS o comando de saida no console é: console.log("Texto" e numero) explicacao do console esta em sima 

/*
var -> As variaves declaradas nela recebem caracteres e numeros
*/

// var a=1, b=2, c=a+b;
// alert(c);

/*Concatenar
var nome = "Franeo ", snome = "Joao", N, idade=20;
N = "Ola o meo nome é " + nome + snome + " e tenho " + idade + " de idade!";
document.getElementById("text").innerHTML = N;
*/

/*
let -> Toda variavel declarada no let, nao pode ser redeclarada no programa
o seu valor so e usado dentro do seu escopo {}
*/

/*
const -> As variaveis depois de serem declaradas nunca muda o seu valor adicionado, e se for declarado novamente dara um erro 
*/

/* valores incrementados no JS o sinal ++ pode ir antes ou depois da variavel, o mesmo acontece no decremento 

var num = 1;
++num;
num++;
alert(num);
*/

// var num = 1;
// num--;
// num--;
// alert(num);

/*
    Tres sinais de igualdade verifica o tipo de dado e o valor 
    ===
    !== Tambem verifica o tipo de dado e o valor
*/

/*
Depois de colocar a condicao podemos colocar o que vai vir escrito na tela 
Lado Esquerdo Verdadeiro, o outro Falso

o sinal de esclamacao fora de um parentes onde detro tem condicao, logo a condicao que estiver dentro dos parentes estara a ser negada, ou se for diferente
var n1=2, n2="2", n3;
n3=(n1 === n2) ? "Sim é":"Nao é";
alert(n3)
*/

// Funcoes

/* function nome_da_funcao (parametros, variaveis){
    retun ; retorna a operacao que queremos que execute.
}
function soma (n1,n2){
    return n1 + n2;
}
Funcao e um bloco de codigo rojetado para executar uma tarefa especifica
*/

// function soma (n1=20,n2=100){
//     return n1 + n2;
// }

// var v=soma(1,2);
// alert(v)

/*
As funcoes tambem podem ser invocadas a partir de elementos html como: 
<button onclik = "nome da funcao()"> </button>
*/

// function alert_ola(){
//     alert("Ola Pessoal eu sou o Franeo")
// }
// Para invocar uma funcao e so colocarmos ela no codigo ex:
// alert_ola();

/* Object -> Objectos
Sao basicamente variaveis com varios dados, ou propriedades

como geralmente as propridades de um obejeto nao mudam entao e o usado o tipo de variavel const, para nao permitir que o valor da variavel mude durante a execucao
*/

// const carro = {
//     marca:"Ford", 
//     modelo:"Ka", 
//     ano:2020, 
//     placa:"1234-CDA",
//     buzina: function(){
//         alert("Biiiiiiiiiiiiiiiiiii");
//     },
//     Aqui o nome da funcao é o nome da propriedade
//     completo: function(){
//         return "A marca e: "+ this.marca + " E o modelo e: "+ this.modelo;
//     }
    //this -> Como e uma propriedade nao uma variavel, para podermos chama-la no return, utilizamos o this para mostrar que esta dentro do objecto
// }
// document.getElementById("text").innerHTML= (carro.completo());
// console.log(carro["ano"]);
// carro.buzina();



/*carro -> Objeto, {propriedades: valor}

Dentro de um object podemos ter metodo, que sao funcoes colocada dentro de uma propriedade
*/

/*Para conseguir mostrar o objecto, podemos velo no console, quando especionamos, com o: 
console.log (nome do object)

se quisermos ver uma propriedade em especifico podemos colocar um ponto e asseguir o nome da propriedade: 
console.log(nome do object.nome da proedade) ou
console.log(nome do object["nome da proedade"])

Para chamar ou executar um metodo (funcao dentro da propriedade) do object:
nome do object.nome da propriedade();
*/

/*EVENTOS

Existem varios tipos de eventos, uns dos mais utilizados sao: 
CLICK
 onclick -> um clik
 ondblclick -> clik dulo

 MOUSE
 onmouseover -> mouse esta sobre
 onmouseout -> mouse movido para fora do elemento
 onmousemove -> mouse movido no elemento
 onmousedown -> quando o clik do botao foi precionado
 onmouseseup -> quando o clik do botao e liberado

INPUT
 onfocus -> disparado quando o elemento recebe foco, valido para input, 
 onchange -> disparado quando existe uma mudanca de conteudo. "Ao mudar"
 onblur -> disparado quando o elemento perde o foco.

 TECLAS PRECIONADAS
 onkeydown -> disparado quando uma tecla e precionada
 onkeypress -> disparado quando uma tecla e precionada e solta
 onkeyup -> disparado quando uma tecla e solta sobre um elemento

 QUANDO ACABA DE CARREGAR A PAGINA, USADO NO BODY
 onload -> disparado quando a pagina acabou de ser carregada
 onresige -> disparado quando ha um redimencionamento a janela
*/

// function eventoclik(){
//     //alert("Acionamos o evento clik"); 
//     //Nos podemos fazer manipular qualquer coisa apartir dos eventos e as funcoes
//     document.body.style.backgroundColor = "yellow";
// }

// function eventoDblclik(){
//     alert("Evento de clik duplo");
// }

// function mudacor(){
//     let div = document.getElementById("test");
//     div.style.backgroundColor = "red"; 
// }

// function mudacor2(){
//     let div = document.getElementById("test");
//     div.style.backgroundColor = "blue"; 
// }  

// function limpa_onfocus(){
//      document.getElementById("input").value = "";
// }

// function mudou(){
//     document.getElementById("input").value = "Obrigado!"
// }

// function desfocado(){
//     let cor = document.getElementById("input");
//     cor.style.backgroundColor = "rgb(161, 161, 161)";
// }

// function teclaprecionada(){
//     let text = document.getElementById("input").value;
//     console.log(text);
// }
// function adicionatex(){
//     let p = document.getElementById("text");
//     p.append("O mouse moveu <br>")
//     // append -> Adicionar
// }

// ARRAYS -> MMATRIZES

// const pessoa = ["Franeo", "Joao", 18, "Jose"];
// const fra=["franeo"], numeros = [1,100,39,76];

//Para saber quantos elementos estao num array(matriz) temos o (nome da variavel.length)
// alert(pessoa.length);
//para mostrar o ultimo elemento da matriz independentimente de quantos elementos tem temos:
// alert(pessoa[pessoa.length - 1]);
//Podemos acreicentar um elemento na matriz .push(nome elemento)
// pessoa.push("Franeojosejoao") 
// console.log(pessoa);
//outra forma e: variavel[variavel.length] = Novo elemeneto
// pessoa[pessoa.length]= "@gmail"; 

// Para verificar se uma variavel e um array ou seja uma matriz, temos: array.isarray(nome da variavel)
// alert(Array.isArray(pessoa)); //true or false

//.join serve para definir o que vai nos espacos de separacao Ex:
//document.getElementById("text").innerHTML = lista4;

// Para para remover o ultimo elemento de um array temos o .pop()
//pessoa.pop(); 

// Para para remover o primeiro elemento de um array temos o .shift()
//pessoa.shift();

// Para para acreicentar um novo elemento num array e ficar na primeira posicao temos o .unshift(novo)
//pessoa.unshift("O melhor");

//tem como adicionar dados numa determinada posicao, utilizamos o .splice(posicao que queremos adicionar, se queremos que apague o que esta naquela posicao ou adicione apenas 0 ->nao apaga, 1 -> apaga, informacao nova)
//pessoa.splice(0, 0, "FRANEO");

//Para concatenar arrays temos: nova variavel = variavel.concat(outra variavel, outra variavel se ainda tiver)
//const lista = pessoa.concat(fra);

//Se quisermos mostar apenas alguns elementos da matriz temos: .slice()-> Um numero indicara onde deve comecar e continuar ate o fim, mas se tiver dois o segundo indica onde termina
//const lista1 = pessoa.slice(2, 3); 

//para deixar os elementos em ordem alfabetica temos o .sort()
//const lista3 = pessoa.sort();

//para deixar os elementos em ordem revertida alfabetica temos o .sort() depois metemos .reverse
// pessoa.sort();
// pessoa.reverse();

//para deixar os elementos em ordem numerica temos o .sort(function (a, b) {return a - b}) o inverso b-a
// const lista4 = numeros.sort(function (a,b) {return a-b});

//para tirar o maior numero de uma array usamos uma funcao

// function maior(array){
//     return Math.max.apply(null, array);
// }

//para tirar o menor numero de uma array usamos uma funcao

// function menor(array){
//     return Math.min.apply(null, array);
// }

//para tirar alguns numeros que sao maiores ou menorees que um determinado numero temos, ou seja filtrar

// const maior20 = numeros.filter(tirar)

// function tirar(value, index, array) {
//     return value > 20;
// }

// document.getElementById("text").innerHTML = maior20;

//Aulas 1 - 12


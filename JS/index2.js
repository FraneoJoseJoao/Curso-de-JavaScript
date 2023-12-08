/*Aula 19 JSON -> JavaScript Object Notation, Notacao de objeto JavaScript

Ele e usado para converter um objeto em texto, ou um texto em um objeto

JSON.parse() -> conserte texto no padra JSON em objeto
JSON.stringify() -> conserte objeto em texto padrao JSON 
*/

//obejeto
class Carro{
  constructor (v1,v2,v3){
     this.marca = v1;
     this.modelo = v2;
     this.ano = v3;
   }
 }  
 //Como um objeto nao poder ser lido no Html, entao convertmos ele em texto
 const Kia = new Carro("Kia", "KIA", 2000);
 //conversao para texto
 const text = JSON.stringify(Kia);
 document.getElementById("text").innerHTML= (text);

 //E para mostrar no console, nao pode ser texto entao voltamos a converter para objeto

 //conversao para texto
 const obj = JSON.parse(text);
 console.log(obj.modelo);





//Aula 18 Maunipulacao de Datas
//O comando base para Data temos: = new Date();

let data = new Date();
console.log(data);

//ano
let ano = new Date().getFullYear();
console.log(ano)

//mes 0 - 11
let mes = new Date().getMonth();
console.log(mes);

//dia do mes
let diaMes = new Date().getDate();
console.log(diaMes);

//dia da semana 0 - 6
let diaSem = new Date().getDay();
console.log(diaSem);

//hora 0 - 23
let hora = new Date().getHours();
console.log(hora);

//minutos 0- 59
let minutos = new Date().getMinutes();
console.log(minutos);

//segundos 0 - 59
let segundos = new Date().getSeconds();
console.log(segundos);

//milisegundo 0 - 999
let milisegundo = new Date().getMilliseconds();
console.log(milisegundo);

//Data com o padrao local
let DatPor = new Date().toLocaleString('pt',{dateStyle: 'short'});
console.log(DatPor);
//Se quisermos que so apareca que a data ou so os minutos temos: so a data: {dateStyle: 'short'-> curto} so a hora {timeStyle: 'short'}

//comparacao de datas
var hoje = new Date();
//passamos a data do termino aqui, mas na ordem so JS, que e: ano, mes, dia
var termino = new Date(2023, 11, 8);

if (hoje > termino){
  console.log("O seu prazo terminou")
} else {
  console.log("Ainda esta dentro do prazo")
}

//Diferenca entre duas datas em dias
var dataIni = new Date();
var dataFin = new Date(2023, 11, 16);
//primeiro temos que saber quanto tempo falta 
//.getTime -> converter data em milisegundos
var tempo = dataFin.getTime() - dataIni.getTime();
//converter milisegundos em dias
var dias = Math.ceil(tempo / (24 * 60 * 60 * 1000));
console.log(dias)


// Aula 17 class, classes, sao como se focem fabricas de objetos, e os transforma ou junta todas as pecas e o: constructor
// E sempre bom utilizarmos a 1- letra maiuscula para o nome da class

// class Carro{
//   constructor (v1,v2,v3){
//     this.marca = v1;
//     this.modelo = v2;
//     this.ano = v3;
//   }
// }

// const Kia = new Carro("Kia", "KIA", 2000);
// const Land_Crus = new Carro("Toyota", "Land Cruser", 2000);
// console.log(Kia);
// console.log(Land_Crus);


//Aula 16 
//Eventos de tempo com JS

/*
setTimeout(function, tempo em milisegundos)
executa um funcao, depois de esperar um tempo determinado de milisegundos 

setInterval(finction,  milisegundos)
fica executando durante o tempo determinado em milisegundos, 
*/
//setTimeout
// function comecar(){
//     document.getElementById("text").innerHTML = "Comecou a contagem";
//     tempo = setTimeout(function(){
//         document.getElementById("text").innerHTML = "Parou a contagem";
//     }, 5000);
// }

//Se quisermo parar a contagem antes do tempo acabar temos que atribuir o setTimeout numa vvariavel e, o clearTimaout(o que queremos parar);

// function parar(){
//     clearTimeout(tempo);
//     document.getElementById("text").innerHTML = "Parou a contagem";
// }
  //parseInt -> Para converter em numero 
//setInterval
// function comecar(){
   
//     tempo = setInterval(function(){
//          var cro = document.getElementById("text").innerHTML;
//         var soma = parseInt(cro) - 1;
  
//     if(soma === 0){
//         ter()
//         parar()
//     } else {
//         document.getElementById("text").innerHTML = soma;
//     }
//         document.getElementById("text").innerHTML = soma;
//     }, 1000);
// }

// function parar(){
//     clearInterval(tempo);
// }
//  function ter() {
//     document.getElementById("text").innerHTML = "Acabou o tempo";
//  }


//Aula no 13 If Else
// Se, senao
//para poder estrair a hora atual do computador temos: new Date().getHours(); onde podemos atribuir a uma variavel

// var hora = new Date().getHours();
// Para o dia da semana = new Date().getDay();
// Para o ano = new Data().getFullYear();

// if (hora < 12){
//     alert("Sao "+ hora +" horas Bom dia")
// } else if (hora < 18){
//     alert("Sao "+ hora +" horas Boa tarde")
// } else {
//     alert("Sao "+ hora +" horas Boa noite")
// }

// para receber o valor de um input de text e muito simples, e so criarrmos uma class ou um id, e depois identificarmos ele no Js, e atribuir o valor numa variavel, ex: 

// var nome = document.getElementById("nome").value;
//value para receber o valor incerido

// SWITCH CASE BREAK -> ESCOLHA CASO TERMINAR
// default -> Se todas as opcoes forem falcas

//Caso a entrada de dados do usuario nao for igual a maneira como escrevemos, o codigo pode nao fincionar da maneira correta, entao uma forma de corrugimos isso e por, utilizrmos o: .tolowerCase();, que trasforma tudo em menusculo

// function verificarcor(){
//     let cor = document.getElementById("cor").value;
//     cor = cor.toLowerCase();
//     switch (cor) {
//         case "azul":
//             document.body.style.backgroundColor = "blue";
//             break;
//         case "vermelho":
//             document.body.style.backgroundColor = "red";
//             break;
//         case "amarelo":
//             document.body.style.backgroundColor = "yellow";
//             break;
//         default:
//             let p = document.getElementById("text");
//             p.style.cor = "red";
//             p.innerHTML = "A cor "+cor+" nao esta desponivel";
//     }

// }

// Faco de repeticao FOR -> PARA

// for (let i=0; i<100; i++){
//     document.getElementById("text").innerHTML += i + ", ";
// }

// ano = new Date().getFullYear();
// for (let i=ano; i>=1900; i--){
//     document.getElementById("ano").innerHTML += "<option value='"+i+"'l> "+i+" </option>";
// }








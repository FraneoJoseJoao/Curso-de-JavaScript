let cont = 0;
let tarefa = document.getElementById("tarefa");
let adi = document.getElementById("adi");
let main = document.getElementById("arealist");

function addtarefa(){
    let valorinp = tarefa.value;
    if ((valorinp !== "") && (valorinp !== null) && (valorinp !== undefined)){
        cont ++;

        let novoitem = `<div id="${cont}" class="item">
        <div class="item-icone" > 
            <input type="checkbox"  id="chek" placeholder="f" id="mar" onclick ="marcarTarefa(${cont})">
        </div>

        <div class="item-nome")"> 
            ${valorinp}
        </div>

        <div class="item-botao">
            <button onclick = "deletar(${cont})" class="apagar">Deletar 🗑️</button>
        </div>

    </div>`;
    main.innerHTML += novoitem;
    tarefa.value = "";
    //.focus(), para quando ficar desfocado acontecer que esta em cima 
    tarefa.focus();
    }
    
}

function deletar(id){
    var apaga = document.getElementById(id);
    apaga.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);
    if (classe == "item"){
        item.classList.add('clicado');
        //Para que quando ele ser selecionado va para o fim da lista
        item.parentNode.appendChild(item);
        //.adicionar um filho
    }
    else {
        item.classList.remove('clicado');
    }
}

//Para que quando quando o usuario acaber de digitar a sua tarefa e ser enter a adicione a sua tarefa
// tarefa.addEventListener("keyup", function(event) {
//     //Se teclou a tecla 13 que e o enter
//     if (event.keyup === 13 ){
//         event.preventDefault();
//         adi.click(); 
//     }
// })


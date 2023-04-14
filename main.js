
const formulario = document.getElementById('formul')

let nome = document.getElementById('recebeNome')
let numTel = document.getElementById('recebeNumTel')
let linhas = document.getElementById('linhas')

let listaNomes = []
let listaNumeros = []
let linha = ''
let contador = 0

// os nomes ou numeros devem ser unicos - impede erros de registros 
function recebeInput(){
    if(listaNumeros.includes(parseInt(numTel.value)) || listaNomes.includes(nome.value)){ // verifica se já existe esse numero e ou nome registrados
        if(listaNumeros.includes(parseInt(numTel.value)) && listaNomes.includes(nome.value)){
            alert(`O nome e número já existem na lista!`)
        }else if(listaNomes.includes(nome.value)){
            alert(`O nome já existe na lista!`)
        }else{
            alert(`O número já existe na lista!`)
        }
        
    }else{
        listaNomes[listaNomes.length] = nome.value
        listaNumeros[listaNumeros.length] = parseInt(numTel.value)
        imprimeInput() // imprime linha
        atualizaCadastrados() //faz contagem de números cadastrados, só aualiza após entrar algo na lista
    } 
}

function imprimeInput(){ //insere no html o nome e numero de acordo com o contador
        linha+=`<tr>
                    <td>
                        <span>
                            ${listaNomes[contador]}
                        </span>
                    </td>
                    <td>
                        <span>
                            ${listaNumeros[contador]}
                        </span>
                    </td>
                </tr>`
   linhas.innerHTML = linha
}

function atualizaCadastrados(){
    contador+=1
    let contadorCads = document.getElementById('numCadastrado')
    contadorCads.innerText = `${contador}` //mostra nossa contagem no html
}

function resetCampos(){
    nome.value = ''
    numTel.value=''
}

// ao fazer o submit do evento desencadeia as funções
formulario.addEventListener('submit', function(e){
    //desabilita comportamento padrão do submit
    e.preventDefault()
    // verifica se nome e número já foram cadastrados, insere na lista e imprime na tela
    recebeInput()
    // limpa os campos de input para o próximo submit
    resetCampos()

})

//validação para não permitir que usuário digite número errado com outros caracteres
numTel.addEventListener('keyup', function(e){
    let telefone = numTel.value
    //NaN -> Not a Number
    if (isNaN(telefone)){ // Se não for número, dá o aviso e reseta campo
        alert('Digite apenas números')
        numTel.value = ''
    }
})


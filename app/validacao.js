function verificaChute(chute) {
    const numero = +chute;

    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += ("<div>Valor Invalido</div>")
        return
    }

    if (numeroValidacao(numero)) {
        elementoChute.innerHTML += ("<div>Valor Invalido: O valor precisar ser entre 1 e 1000</div>"
                
        )
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = (`<div><h1>Voce acertou<br>O número secreto era ${numeroSecreto}</h1></div>
                                    <button id="restart" class="btn-restart">Jogar Novamente</button>
                                `);
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += (`<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`)

    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += (`<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`)
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroValidacao(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'restart'){
        window.location.reload();
    }
})


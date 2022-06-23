/////// Gráfico 01

let yearSelector = document.querySelector( 'select.ano-options' )

let barraVerde = document.querySelector("[data-categoria='verde']")
let barraAmarelo = document.querySelector("[data-categoria='amarelo']")
let barraLaranja = document.querySelector("[data-categoria='laranja']")
let barraVermelho = document.querySelector("[data-categoria='vermelho']")

yearSelector.addEventListener( 'change', chooseYear )

function chooseYear() {

    let year = yearSelector.value

    if (year == '2004') {
        
        barraVerde.style.width = '64.7%'
        barraVerde.textContent = '64.7%'

        barraAmarelo.style.width = '13.8%'
        barraAmarelo.textContent = '13.8%'

        barraLaranja.style.width = '12%'
        barraLaranja.textContent = '12%'

        barraVermelho.style.width = '9.5%'
        barraVermelho.textContent = '9.5%'
        
    }

    if (year == '2009') {
        
        barraVerde.style.width = '69.6%'
        barraVerde.textContent = '69.6%'

        barraAmarelo.style.width = '15.8%'
        barraAmarelo.textContent = '15.8%'

        barraLaranja.style.width = '8%'
        barraLaranja.textContent = '8%'

        barraVermelho.style.width = '6.6%'
        barraVermelho.textContent = '6.6%'
        
    }

    if (year == '2013') {
        
        barraVerde.style.width = '77.1%'
        barraVerde.textContent = '77.1%'

        barraAmarelo.style.width = '13.6%'
        barraAmarelo.textContent = '13.6%'

        barraLaranja.style.width = '6.1%'
        barraLaranja.textContent = '6.1%'

        barraVermelho.style.width = '4.2%'
        barraVermelho.textContent = '4.2%'

    }

    if (year == '2018') {
        
        barraVerde.style.width = '63.4%'
        barraVerde.textContent = '63.4%'

        barraAmarelo.style.width = '20.7%'
        barraAmarelo.textContent = '20.7%'

        barraLaranja.style.width = '10.1%'
        barraLaranja.textContent = '10.1%'

        barraVermelho.style.width = '5.8%'
        barraVermelho.textContent = '5.8%'

    }

    if (year == '2020') {
        
        barraVerde.style.width = '44.8%'
        barraVerde.textContent = '44.8%'

        barraAmarelo.style.width = '34.7%'
        barraAmarelo.textContent = '34.7%'

        barraLaranja.style.width = '11.5%'
        barraLaranja.textContent = '11.5%'

        barraVermelho.style.width = '9%'
        barraVermelho.textContent = '9%'

    }

    if (year == '2021/2022') {
        
        barraVerde.style.width = '41.3%'
        barraVerde.textContent = '41.3%'

        barraAmarelo.style.width = '28%'
        barraAmarelo.textContent = '28%'

        barraLaranja.style.width = '15.2%'
        barraLaranja.textContent = '15.2%'

        barraVermelho.style.width = '15.5%'
        barraVermelho.textContent = '15.5%'

    }
    
}

// Gráfico 02


// Mapa das regiões

let regiaoNorteeNordeste = document.querySelector('img.nordeste-e-norte')

let regiaoCentroOesteeSudeste = document.querySelector( 'img.centro-oeste-e-sudeste' )

let regiaoSul = document.querySelector( 'img.sul' )


// Infos de cada região

let infosNorteeNordeste = document.querySelector('.grafico-02-infos > img:nth-child(1)')

let infosCentroOesteeSudeste = document.querySelector('.grafico-02-infos > img:nth-child(2)')

let infosSul = document.querySelector('.grafico-02-infos > img:nth-child(3)')

console.log(infosSul);


// Declaração da variável que irá abrigar o elemento 'select'

let regionSelector = document.querySelector( 'select.regiao' )

regionSelector.addEventListener( 'change', chooseRegion )

function chooseRegion (){

    let region = regionSelector.value

    if (region == 'norte-e-nordeste') {

        regiaoNorteeNordeste.classList.add( 'appear' )

        infosNorteeNordeste.classList.add( 'appear' )

    } else {
        
        regiaoNorteeNordeste.classList.remove( 'appear' )

        infosNorteeNordeste.classList.remove( 'appear' )

    }

    if (region == 'centro-oeste-e-sudeste') {
        
        regiaoCentroOesteeSudeste.classList.add( 'appear' )

        infosCentroOesteeSudeste.classList.add( 'appear' )

    } else {
        
        regiaoCentroOesteeSudeste.classList.remove( 'appear' )

        infosCentroOesteeSudeste.classList.remove( 'appear' )

    }

    if (region == 'sul') {
        
        regiaoSul.classList.add( 'appear' )

        infosSul.classList.add( 'appear' )

    } else {
        
        regiaoSul.classList.remove( 'appear' )

        infosSul.classList.remove( 'appear' )

    }

}
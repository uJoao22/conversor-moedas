let botao = document.getElementById("botao");
let select = document.getElementById("select-moedas");

botao.addEventListener("click", converterMoedas);
select.addEventListener("change", trocaDeMoeda);

//Funções
async function converterMoedas() {
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta) { 
        return resposta.json();
    });

    let dolar = moedas.USDBRL.high; 
    let euro = moedas.EURBRL.high;
    let inputValorEmReais = Number(document.getElementById("input").value); 
    let inputMoedas = document.getElementById("input-moedas");
    let inputReal = document.getElementById("texto-real"); 

    if(select.value === "US$ Dolar Americano") { 
        let valorEmDolares = inputValorEmReais / dolar; 
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }

    if(select.value === "€ Euro"){
        let valorEmEuros = inputValorEmReais / euro;
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
    }

    inputReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
}

function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas");
    let bandeiraMoedas = document.getElementById("bandeira-moedas");

    if(select.value === "US$ Dolar Americano") { 
        textoMoedas.innerHTML = "Dolar Americano"; 
        bandeiraMoedas.src = 'img/eua.png';
    }

    if(select.value === "€ Euro"){
        textoMoedas.innerHTML = "Euro";
        
        bandeiraMoedas.src = 'img/euro.png';
    }

    converterMoedas();
}
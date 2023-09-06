const key = "a8603393389fd0472634244c966b5b26"

function nomeTela (dados) {
    document.querySelector('.txtcidade').innerHTML = 'Tempo em : ' +dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) +'°C'
    document.querySelector('.clima').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = dados.main.humidity +"%"
    document.querySelector('.img-temp').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(respota => respota.json())
    console.log(dados)

    nomeTela(dados)
}

function clicar (){
    const cidade = document.querySelector('.input-cidade').value
    buscarCidade(cidade) 
}
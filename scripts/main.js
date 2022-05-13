import { getWeatherByCity } from "./apiService.js"
const viewElems = {}


const getDOMElems = id =>{
    return document.getElementById(id)
}

const connectHTMLElems = () =>{
    viewElems.mainContainer = getDOMElems("mainContainer")
    viewElems.weatherSearchView = getDOMElems("weatherSearchView")
    viewElems.weatherForecastView = getDOMElems("weatherForecastView")

    viewElems.searchInput = getDOMElems("searchInput")
    viewElems.searchButton = getDOMElems("searchButton")
    viewElems.weatherCityContainer = getDOMElems("weatherCityContainer")

    viewElems.weatherCity = getDOMElems("weatherCity")
    viewElems.weatherIcon = getDOMElems("weatherIcon")

    viewElems.weatherCurrentTemp = getDOMElems("weatherCurrentTemp")
    viewElems.weatherMaxTemp = getDOMElems("weatherMaxTemp")
    viewElems.weatherMinTemp = getDOMElems("weatherMinTemp")

    viewElems.returnToSearchBtn = getDOMElems("returnToSearchBtn")
}

const setupListener = () =>{
    viewElems.searchInput.addEventListener('keydown', onEnterSubmit)
    viewElems.searchButton.addEventListener('click', onClickSubmit)
}

const initializeApp = () =>{
    connectHTMLElems()
    setupListener()
}

const onEnterSubmit = event =>{
    if(event.key === 'Enter'){
        let qurey = viewElems.searchInput.value
        getWeatherByCity(qurey).then(data => {
            console.log(data)
        })
    }
}
const onClickSubmit = () =>{}

document.addEventListener("DOMContentLoaded", initializeApp)
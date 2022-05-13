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
    viewElems.returnToSearchBtn.addEventListener('click', returnToSearch)
}

const initializeApp = () =>{
    connectHTMLElems()
    setupListener()
}

const onEnterSubmit = event =>{
    if(event.key === 'Enter'){
        fadeInOut()
        let qurey = viewElems.searchInput.value
        getWeatherByCity(qurey).then(data => {
            console.log(data)
            switchView()
            fadeInOut()
        })
    }
}

const onClickSubmit = () =>{
    fadeInOut()
    let qurey = viewElems.searchInput.value
        getWeatherByCity(qurey).then(data => {
            console.log(data)
            switchView()
            fadeInOut()
        })
    
}

 const fadeInOut = () => {
    if (viewElems.mainContainer.style.opacity === '1' || viewElems.mainContainer.style.opacity === '') {
      viewElems.mainContainer.style.opacity = '0';
    } else {
      viewElems.mainContainer.style.opacity = '1';
    }
  }

  const switchView = () => {
    if (viewElems.weatherSearchView.style.display !== 'none') {
      viewElems.weatherSearchView.style.display = 'none';
      viewElems.weatherForecastView.style.display = 'block';
    } else {
      viewElems.weatherForecastView.style.display = 'none';
      viewElems.weatherSearchView.style.display = 'flex';
    }
  }

  const returnToSearch = () => {
   fadeInOut();

    setTimeout(() => {
      switchView();
      fadeInOut();
    }, 500);
  }

document.addEventListener("DOMContentLoaded", initializeApp)
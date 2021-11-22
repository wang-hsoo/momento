const API_KEY = "fd222c4b2d6c01af353e4009d93d80e8";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //날씨관련 정보를 불러온뒤 그 데이터를 가지고 함수 실행
    fetch(url).then((response) => response.json()).then((data) =>{
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    
}

//getCurrentPosition() 은 argument가 2개 필요하다. 하나는 잘됬을때 하나는 에러가 발생했을때
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


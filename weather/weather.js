$(document).ready(function(){





  function weather(){
    var URL = "https://fcc-weather-api.glitch.me/api/current?lat=37.77&lon=-122.41";
    $.getJSON(URL, function(data){
      console.log(data);
      updateDOM(data);

    });
  }

  weather();


  function updateDOM(data) {

    var city = data.name;
    var temp = Math.round(data.main.temp);
    var desc = data.weather[0].description;


    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    


  }







});

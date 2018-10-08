$(document).ready(function(){
/*
  // Get location
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos){
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }


  function error(){
    console.log("error");
  }

*/

  function weather(lat, long){
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=37.77&lon=-122.41`;

    $.getJSON(URL, function(data){
      console.log(data);
      updateDOM(data);

    });
  }

  // Update DOM
  function updateDOM(data) {

    var city = data.name;
    var temp = Math.round(data.main.temp);
    var desc = data.weather[0].description;
    var icon = data.weather[1].icon;

    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr('src', icon);


  }







});

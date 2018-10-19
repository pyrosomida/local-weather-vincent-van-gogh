$(document).ready(function() {

var images = {

  '01d': 'images/01d_w.jpg',
  '01n': 'images/01n_w.jpg',
  '02d': 'images/02d_w.jpg',
  '02n': 'images/02n_w.jpg',
  '03d': 'images/03d_w.jpg',
  '03n': 'images/03n_w.jpg',
  '04d': 'images/04d_w.jpg',
  '04n': 'images/04d_w.jpg',
  '09d': 'images/09d_w.jpg',
  '09n': 'images/09d_w.jpg',
  '10d': 'images/09d_w.jpg',
  '10n': 'images/09d_w.jpg',
  '11d': 'images/11d_w.jpg',
  '11n': 'images/09d_w.jpg',
  '13d': 'images/09d_w.jpg',
  '13n': 'images/09d_w.jpg',
  '50d': 'images/09d_w.jpg',
  '50n': 'images/09d_w.jpg'
}

  $.getJSON("https://ipinfo.io/json", function(ipinfo) {
    var location = ipinfo.loc;
    var locArray = location.split(",");
    var lati = locArray[0];
    var longi = locArray[1];
    var degree = "C";

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+longi+"&APPID=751e67b396383224a6e2936051179161", function(json) {
      var currentWeather = json.weather[0].main;
      $("#weather").html(currentWeather);

      var city = json.name;
      var country = json.sys.country;
      var temp = Math.round(json.main.temp-273.15);
      var icon = json.weather[0].icon;
      console.log("icon",icon);
      $('#city').html(city + ", " + country);
      $('#temp').html(temp);
      $('#degree').html(degree);

      $('#convert').on('click',function () {
        if (degree === "C") {
          temp = Math.round(temp * 1.8 + 32);
          degree = "F";
        } else {
          temp = Math.round((temp-32)*5/9);
          degree = "C";
        }
        $('#temp').html(temp);
        $('#degree').html(degree);
     });

      var iconUrl = "https://openweathermap.org/img/w/" + icon + ".png";
      $('#icon').html("<img src='" + iconUrl + "'/>");

      var testUrl = 'https://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg';

      var imageUrl = "'"+images[icon]+"'";
      console.log("imageUrl",imageUrl);

      $('#image').html("<img src=" + imageUrl +" class='img-responsive' />");
    });



  });

});

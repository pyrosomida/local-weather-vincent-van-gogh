$(document).ready(function() {

var images = {

  '01d': 'http://www.vangoghgallery.com/catalog/image/0671/Blossoming-Almond-Tree.jpg',
  '01n': 'http://www.vangoghgallery.com/catalog/image/0467/Caf%C3%A9-Terrace-on-the-Place-du-Forum,-Arles,-at-Night,-The.jpg',
  '02d': 'http://www.vangoghgallery.com/catalog/image/0240/Seine-Bridge-at-Asnieres,-The.jpg',
  '02n': 'http://www.vangoghgallery.com/catalog/image/0474/Starry-Night-Over-the-Rhone.jpg',
  '03d': 'http://www.vangoghgallery.com/catalog/image/0396/Gleize-Bridge-over-the-Vigueirat-Canal,-The.jpg',
  '03n': 'http://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg',
  '04d': 'http://www.vangoghgallery.com/catalog/image/0261/View-of-the-Roofs-of-Paris.jpg',
  '04n': 'http://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg',
  '09d': 'http://www.vangoghgallery.com/catalog/image/0650/Wheat-Field-in-Rain.jpg',
  '09n': 'http://www.vangoghgallery.com/catalog/image/0650/Wheat-Field-in-Rain.jpg',
  '10d': 'http://www.vangoghgallery.com/catalog/image/0811/Landscape-at-Auvers-in-the-Rain.jpg',
  '10n': 'http://www.vangoghgallery.com/catalog/image/0372/Japonaiserie:-Bridge-in-the-Rain-(after-Hiroshige).jpg',
  '11d': 'http://www.vangoghgallery.com/catalog/image/0575/Landscape-Under-a-Stormy-Sky.jpg',
  '11n': 'http://www.vangoghgallery.com/catalog/image/1672/Twilight,-before-the-Storm:-Montmartre.jpg',
  '13d': 'http://www.vangoghgallery.com/catalog/image/0260/Backyards-of-old-Houses-in-Antwerp-in-the-Snow.jpg',
  '13n': 'http://www.vangoghgallery.com/catalog/image/0194/Parsonage-Garden-at-Nuenen-in-the-Snow,-The.jpg',
  '50d': 'http://www.vangoghgallery.com/catalog/image/0188/Landscape-with-a-Church-at-Twilight.jpg',
  '50n': 'http://www.vangoghgallery.com/catalog/image/0188/Landscape-with-a-Church-at-Twilight.jpg'
}

  $.getJSON("http://ipinfo.io/json", function(ipinfo) {
    var location = ipinfo.loc;
    var locArray = location.split(",");
    var lati = locArray[0];
    var longi = locArray[1];
    var degree = "C";

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+longi+"&APPID=751e67b396383224a6e2936051179161", function(json) {
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

      var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
      $('#icon').html("<img src='" + iconUrl + "'/>");

      var testUrl = 'http://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg';

      var imageUrl = "'"+images[icon]+"'";
      console.log("imageUrl",imageUrl);

      $('#image').html("<img src=" + imageUrl +" class='img-responsive' />");
    });



  });

});

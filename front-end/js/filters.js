$( function() {
  var main_route = (window.location.pathname.split("/"));
  var ding = main_route[main_route.length-1].split(".")[0];
  console.log("ding" + ding);
  if(ding == "bicycles" ){
    loadFiltersBicycle();
  }
else  if(ding == "cars" ){
    loadFiltersCar();
  }
else if(ding == "hotair" ){
    loadFiltersHotAir();
  }
  else if(ding == "motorbike" ){
    loadFiltersMotorBike();
  }
  else if(ding == "planes" ){
    loadFiltersPlanes();
  }

});

  function loadFiltersBicycle(){
    document.getElementById("filters").innerHTML =

    '<h3>Brands:</h3>' +
    '<div class="brands"></div>'+
    '<h3>Frametype:</h3>'+
  '  <div class="types"></div>'+
  '  <h3>Amount of gears:</h3>'+
    '<div class="gears"></div>'

  }
  function loadFiltersCar(){

  }
  function loadFiltersHotAir(){

  }
  function loadFiltersMotorBike(){

  }
  function loadFiltersPlanes(){

  }

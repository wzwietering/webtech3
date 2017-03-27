$( function() {
  var main_route = (window.location.pathname.split("/"));
  var ding = main_route[main_route.length-1].split(".")[0];
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

//Load the basic filter structure
function loadFiltersBicycle(){
  document.getElementById("filters").innerHTML =

  '<h3>Brands:</h3>' +
  '<div class="brands"></div>'+
  '<h3>Frametype:</h3>'+
  '  <div class="types"></div>'+
  '  <h3>Amount of gears:</h3>'+
  '<div class="gears"></div>';
  fillFilters();
}
function loadFiltersCar(){
  document.getElementById("filters").innerHTML =

  '<h3>Brands:</h3>' +
  '<div class="brands"></div>'+
  '<h3>Bodytype:</h3>'+
  '  <div class="types"></div>'+
  '  <h3>Fuel:</h3>'+
  '<div class="fuel"></div>';
  fillFilters();
}
function loadFiltersHotAir(){
  document.getElementById("filters").innerHTML =
  '<h3>Brands:</h3>' +
  '<div class="brands"></div>'+
  '<h3>Size:</h3>'+
  '  <div class="size"></div>';
  fillFilters();
}
function loadFiltersMotorBike(){
  document.getElementById("filters").innerHTML =
  '<h3>Brands:</h3>' +
  '<div class="brands"></div>'+
  '<h3>Frametype:</h3>'+
  '  <div class="types"></div>'+
  '  <h3>Enginesize:</h3>'+
  '<div class="engineSize"></div>';
  fillFilters();
}
function loadFiltersPlanes(){
  document.getElementById("filters").innerHTML =

  '<h3>Brands:</h3>' +
  '<div class="brands"></div>'+
  '<h3>Amount of passengers:</h3>'+
  '  <div class="passengers"></div>'+
  '  <h3>Airtime:</h3>'+
  '<div class="airtime"></div>';
  fillFilters();
}

//Fill the filters with stuff using getFilters function
function fillFilters(){
  var filterArray = [""];
  filterArray[0] = document.getElementsByClassName("brands");
  filterArray[1] = document.getElementsByClassName("types");
  filterArray[2] = document.getElementsByClassName("gears");
  filterArray[3] = document.getElementsByClassName("fuel");
  filterArray[4] = document.getElementsByClassName("engineSize");
  filterArray[5] = document.getElementsByClassName("passengers");
  filterArray[6] = document.getElementsByClassName("airtime");
  filterArray[7] = document.getElementsByClassName("size");
  filterArray.forEach(getFilters);
}
//Get filters from the server
function getFilters(e){
  if(e.length != 0){

    console.log(e[0].className);
    //Now get filters from server
  }
}

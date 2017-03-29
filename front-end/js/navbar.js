document.getElementById("navBar").innerHTML =
'<div class="navcontainer">'+
'<div class="navcontent">'+
  '<ul>'+
    '<li id="navbar_index"><a href="index.html" >Home</a></li>'+
    '<li id="navbar_ranking"><a href="index.html">Browse</a></li>'+
    '<li id="navbar_weapons"><a href="index.html">Top</a></li>'+
    '<li id="navbar_maps"><a href="index.html">Stuff</a></li>'+
    '<li id="navbar_tips"><a href="index.html">Stuff</a></li>'+
    '<li id="navbar_about" style="float:right;"><a href="index.html">Basket</a></li>'+
    '<li id="navbar_contact" style="float:right;"><a href="login.html">Login</a></li>'+
  '</ul>'+
'</div>'+
'</div>';

$(document).ready(function() {
    var main_route = (window.location.pathname.split("/"));
    var ding = main_route[main_route.length-1].split(".")[0];
    $("#navbar_" + ding).addClass('activenav');
});

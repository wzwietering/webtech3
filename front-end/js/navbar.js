document.getElementById("navBar").innerHTML =
'<div class="navcontainer">'+
'<div class="navcontent">'+
  '<ul>'+
    '<li id="navbar_index"><a href="index.html" >Home</a></li>'+
    '<li id="navbar_ranking"><a href="ranking.html">Ranking System</a></li>'+
    '<li id="navbar_weapons"><a href="weapons.html">Weapons</a></li>'+
    '<li id="navbar_maps"><a href="maps.html">Maps</a></li>'+
    '<li id="navbar_tips"><a href="tips.html">Tips and Tricks</a></li>'+
    '<li id="navbar_about"><a href="about.html">About</a></li>'+
    '<li id="navbar_contact"><a href="contact.html">Contact</a></li>'+
  '</ul>'+
'</div>'+
'</div>';

$(document).ready(function() {
    var main_route = (window.location.pathname.split("/"));
    console.log(main_route);
    var ding = main_route[main_route.length-1].split(".")[0];
    $("#navbar_" + ding).addClass('activenav');
});

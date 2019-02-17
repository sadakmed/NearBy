function matchPwd(){
    var pwd = $("input#pwdR").val();
    var cpwd = $("input#cpwdR").val();
    if (pwd == cpwd) {
         $("#message").html("Matching").css("color", "green");}
    else 
         $("#message").html("Not Matching").css("color", "red");
}


function emailValidator(email) {
    
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;               
    return emailReg.test( email );    
        
}
      
function emailValFront(){
  var email = $("input#emailR").val();
  if(!emailValidator(email))
    $("#emailValidation").html("Email is invalid").css("color", "red");
}


function getLocation(){

    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position){
        $("input#lat").val(position.coords.latitude);
        $("input#long").val(position.coords.longitude);
      });
    }else
      Alert("Browser doesn't support geolocation!");
    
}

function getSkeleton(){
    $("div#skeleton").append('<nav class="navbar navbar-default" id="navBar"></nav><div class="row"><div class="col-lg-12"><div class="row" id="shops"></div><div class="row" id="preferredShops"></div></div></div>');
}  

function getNavBar(){
  getSkeleton();
  $("nav#navBar").append('<div class="container-fluid"><ul class="nav navbar-nav"><li class="active"><a id="nearbytab" href="#">NearBy Shops</a></li><li><a href="#" id = "prefertab">Preferred Shops</a></li></ul></div>');
}
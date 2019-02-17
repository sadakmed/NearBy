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
  
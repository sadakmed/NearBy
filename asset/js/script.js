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
  if($("ul").children("li").length < 2)
    $('<nav class="navbar navbar-default" id="navBar"><div class="container-fluid"><ul class="nav navbar-nav"><li class="active"><a id="nearbytab"  >NearBy Shops</a></li><li ><a id = "prefertab">Preferred Shops</a></li></ul></div></nav><div class="row"><div class="col-lg-12"><div class="row" id="shops"></div><div class="row" id="preferredShops"></div></div></div>').appendTo("div#skeleton");
}  



function likeShop(){
  var shopId=$(this).children().val();
  $.ajax({url:"backendPhp/likeshop.php",
          method:"POST",
          data:{shopId:shopId},
          error:function(result){console.log(result);},
          success:function(result){
              console.log(result);
              if( result=="1")
                  $("div#"+shopId).remove();
          }
  });
}



function register(){
            
  var emailR = $("input#emailR").val();
  var pwdR = $("input#pwdR").val();
  var cpwdR = $("input#cpwdR").val();
  var lat = $("input#lat").val();
  var long = $("input#long").val();



  if (pwdR== cpwdR & emailValidator(emailR) ) {

        $.ajax({
                    method: "POST",
                    url: "backendPhp/register.php",
                    data: { email: emailR,pwd:pwdR,lat:lat,long:long},
                    error:function(result){
                      console.log(result);
                      alert("Something went Wrong, Please try again!!");},
                    success:displayNearByShops
                });
    }else 
        alert("Email is Invalid or Passwords don't match!!");
}


function login(){
            
  var emailL = $("input#emailL").val();
  var pwdL = $("input#pwdL").val();
  var lat = $("input#lat").val();
  var long = $("input#long").val();



  if (emailValidator(emailL)) {

        $.ajax({
                    method: "POST",
                    url: "backendPhp/login.php",
                    data: { email: emailL,pwd:pwdL,lat:lat,long:long},
                    error:function(result){ console.log(result); alert("Something went Wrong, Please try again!!");},
                    success:displayNearByShops
                });
    }else 
        alert("Email is Invalid or Passwords don't match!!");
}








function displayNearByShops(result){
  console.log(result);
                      
  if(result!="-1"){
      try{                                
          var shops=JSON.parse(result);  
          $("div.modal-dialog").remove();   
          getSkeleton();       
          $("#cardShoptmp").tmpl(shops).appendTo("div#shops");
          $("i.glyphicon-thumbs-up").click(likeShop);
      
      }catch(err) {
          console.log(err);
          alert("Something went Wrong, Please try again!!");

      }
  }else
      alert("This email already exists!!");

}
//0628692011
function getNearByShops(){

  var lat = $("input#lat").val();
  var long = $("input#long").val();
  $.ajax({url:"backendPhp/nearby.php",
          method:"POST",
          data:{lat:lat,long:long},
          success:displayNearByShops
        });



}


function displayPreferredShops(result){
  console.log(result);
                      
  if(result!="-1"){
      try{                                
          var shops=JSON.parse(result);  
          $("div#shops").children().remove(); 
          $("#preferShoptmp").tmpl(shops).appendTo("div#preferredShops");
          $("i.glyphicon-thumbs-Down").click(likeShop);          
         
      
      }catch(err) {
        console.log(err);
        alert("Something went Wrong, Please try again!!");

      }
  }else
      alert("This email already exists!!");

}


function getPreferredShops(){
  var lat = $("input#lat").val();
  var long = $("input#long").val();
  $.ajax({url:"backendPhp/preferredShops.php",
          method:"POST",
          data:{lat:lat,long:long},
          success:displayPreferredShops
        });




}

function navigateNavBar(){

  $('div#skeleton').on('click', 'a#prefertab',function(){
    $("div#shops").children().remove(); 
    getPreferredShops();
  });
  
  $('div#skeleton').on('click', 'a#nearbytab',function(){
    $("div#preferredShops").children().remove(); 
    getNearByShops();
    });

}

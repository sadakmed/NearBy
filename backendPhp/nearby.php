<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);


if (isset ($_POST["lat"]) && isset ($_POST["long"]) ){
    
    $sql = "SELECT calcDistance(:lat,:long,s.Latitude,s.Longitude) as distance , s.ShopName ,s.ImgUrl , s.Id  FROM `shops` s WHERE calcDistance(:lat,:long,s.Latitude,s.Longitude) <= 10 AND (s.Id NOT IN (SELECT p.IdShop from preferredShops p WHERE p.IdShop = s.Id and p.IdUser = :user ))";
    $stmt = $pdo->prepare($sql);
  
    $stmt->bindValue(':lat', $_POST["lat"]);
    $stmt->bindValue(':long', $_POST["long"]);
    $stmt->bindValue(':user', $user);
 
    
    $return = $stmt->execute();
    //var_dump($stmt->fetchAll()) ;
    $shops=array();


    foreach ($stmt->fetchAll() as $key => $value) {
    
        $shop["distance"]= round(  (float)$value["distance"] ,3);
        $shop["ShopName"]= $value["ShopName"];
        $shop["ImgUrl"]= $value["ImgUrl"];
        $shop["Id"]= $value["Id"];
        array_push($shops,$shop);
        

         
    }
    echo(json_encode($shops));
    


}

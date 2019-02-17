<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once "connection.php";


if(isset($_POST["email"])  ){

    //check if the email already exists.
    
   
    $sql = "SELECT COUNT(Email) AS num FROM users WHERE Email = :email";
    $stmt = $pdo->prepare($sql);
    
    
    $stmt->bindValue(':email', $_POST["email"]);
    
 
    $stmt->execute();
    
    
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
    //If the provided email already exists .
  
    if($row['num'] > 0)

        echo("-1");
    
    else{   
    
    //Prepare our INSERT statement.
        
        $sql = "INSERT INTO users (Email, Pwd) VALUES (:email, :pwd)";
        $stmt = $pdo->prepare($sql);
        
    
        $stmt->bindValue(':email', $_POST["email"]);
        $stmt->bindValue(':pwd', md5($_POST["pwd"]));
        $result = $stmt->execute();
        
        //If the registration process is successful.
        if($result){

            $user=-1;   
            require_once "nearby.php" ;
        }
    }
}



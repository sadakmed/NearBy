<?php
require_once "session.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once "connection.php";

if(isset($_POST["email"]) && isset($_POST["pwd"]) ){

    
    
   
    $sql = "SELECT Id FROM users WHERE Email = :email AND Pwd=:pwd ";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':email', $_POST["email"]);
    $stmt->bindValue(':pwd', md5($_POST["pwd"]));
    
    $stmt->execute();
    
    
    $row = $stmt->fetchColumn(0);
    
    //If the provided crendentials R write.
  
    if(!isset($row) )

        echo("-1");
    
    else{

        
        $_SESSION["userId"] = $row;
        
        require_once "nearby.php" ;

    }
}
?>
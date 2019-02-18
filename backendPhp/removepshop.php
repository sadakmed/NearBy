<?php 
require_once "session.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once "connection.php";

if(isset($_POST["likeId"]) && isset ($_SESSION["userId"])){
    $stmt=$pdo->prepare("delete from preferredShops where IdShop =:likeId and IdUser=:user");
    $stmt->bindValue(':likeId', $_POST["likeId"]);
    $stmt->bindValue(':user', $_SESSION["userId"]);
    $result = $stmt->execute();

    if($result)
        echo "1";
    else
        echo "-1";







}


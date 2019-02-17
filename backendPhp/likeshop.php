<?php 
require_once "session.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once "connection.php";

if(isset($_POST["shopId"]) && isset ($_SESSION["userId"])){
    $stmt=$pdo->prepare("insert into preferredShops (IdShop,IdUser) values (:shopId,:userId) ");
    $stmt->bindValue(':shopId', $_POST["shopId"]);
    $stmt->bindValue(':userId', $_SESSION["userId"]);
    $result = $stmt->execute();

    if($result)
        echo "1";
    else
        echo "-1";







}


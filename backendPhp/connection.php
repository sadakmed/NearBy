<?php

$user="akura";
$pwd="akura";
$dbname="Nearby";
try{

    $pdo = new PDO("mysql:host=localhost;dbname=$dbname", $user, $pwd);

}catch(PDOException $e) {
    echo $e->getMessage();
}

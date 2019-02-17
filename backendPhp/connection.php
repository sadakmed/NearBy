<?php

$user="akura";
$pwd="akura";
$dbname="URTest";
try{

    $pdo = new PDO("mysql:host=localhost;dbname=$dbname", $user, $pwd);

}catch(PDOException $e) {
    echo $e->getMessage();
}
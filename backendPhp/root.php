<?php
require_once "session.php";

if(@isset($_SESSION["userId"]))
{ 
    echo("1");

}else{

    echo("-1");
}
<?php

require_once "session.php";

session_destroy();
$_SESSION["userId"]=null;
echo "1";
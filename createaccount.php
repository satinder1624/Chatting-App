<?php

include "connect.php";

$firstName = filter_input(INPUT_GET, "firstname");
$lastName = filter_input(INPUT_GET, "lastname");
$userName = filter_input(INPUT_GET, "username");
$passWord = filter_input(INPUT_GET, "password");



$cmd = "INSERT INTO createaccount (firstname,lastname,username,password) VALUES ('$firstName','$lastName', '$userName' , '$passWord')";
$statement = $dbh->prepare($cmd);
$result = $statement->execute();

<?php
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
*/
include "connect.php";

$senderusername = filter_input(INPUT_GET, "seusername");
$receiverusername = filter_input(INPUT_GET, "reusername");
$message = filter_input(INPUT_GET, "me");

$cmd = "INSERT INTO message (senderusername,receiverusername,message) VALUES ('$senderusername','$receiverusername', '$message')";
$statement = $dbh->prepare($cmd);
$result = $statement->execute();


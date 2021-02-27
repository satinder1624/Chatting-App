<?php
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
*/
include "connect.php";
//Name of the item
$id = filter_input(INPUT_GET, "id");
$reply = filter_input(INPUT_GET, "reply");

//Update Query
$cmd = "update message set reply = '$reply' where id = '$id'";
$statement = $dbh->prepare($cmd);
$result = $statement->execute(); 
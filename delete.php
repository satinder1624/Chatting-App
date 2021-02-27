<?php
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
Description : A file which add the item into the table and display with AJAX and JSON
*/

//Connection COde
include "connect.php";

//Receive the name with fecth statment of json
$id = filter_input(INPUT_GET, "id");

//Delete Command
$cmd = "DELETE FROM createaccount WHERE id = '$id' ";
$statement = $dbh->prepare($cmd);
$result = $statement->execute();
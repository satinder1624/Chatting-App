<?php
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
*/
include "connect.php";


$cmd = "SELECT username FROM createaccount";
$statement = $dbh->prepare($cmd);
$result = $statement->execute();
$userlist = [];
while ($row = $statement->fetch()) {
    $user = [
        "username" => $row["username"]
    ];
    array_push($userlist, $user);
}

// Write the json encoded array to the HTTP Response
echo json_encode($userlist);
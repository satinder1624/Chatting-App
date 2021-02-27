<?php
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
*/

session_start();                                                            //Session Satrt
include "connect.php";                                                      //Connection String

$username = filter_input(INPUT_GET, "username");                            //Get username
$password = filter_input(INPUT_GET, "password");                            //Get password

$_SESSION["username"] = $username;                                          //Store username in session for login security checking
$_SESSION["password"] = $password;                                          //Store password in session for login security checking

//Select command
$cmd = "SELECT id,username,password FROM createaccount WHERE username = '$username' and password = '$password'";
$statement = $dbh->prepare($cmd);
$result = $statement->execute();
$userlist = [];
while ($row = $statement->fetch()) {
    $user = [
        "id" => $row["id"],
        "username" => $row["username"],
        "password" => $row["password"]
    ];
    array_push($userlist, $user);     //Push to array
}

// Write the json encoded array to the HTTP Response
echo json_encode($userlist);
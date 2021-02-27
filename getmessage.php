<?php
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
*/
include "connect.php";

$re = filter_input(INPUT_GET, "seusername");

// Prepare and execute the DB query
$command = "SELECT id,senderusername,message,reply FROM message where receiverusername = '$re'";
$stmt = $dbh->prepare($command);
$success = $stmt->execute();

// Fill an array with User objects based on the results.
$userlist = [];
while ($row = $stmt->fetch()) {
    //$user = new User($row["firstname"], $row["lastname"], $row["final_exam"]);
    $user = [
        "id" => $row["id"],
        "senderusername" => $row["senderusername"],
        "message" => $row["message"],
        "reply" => $row["reply"]        
    ];
    array_push($userlist, $user);
}

// Write the json encoded array to the HTTP Response
echo json_encode($userlist);

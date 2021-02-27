<?php
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
Description : A file which add the item into the table and display with AJAX and JSON
*/
//Connection code
try {
	$dbh = new PDO("mysql:host=localhost;dbname=000824885", "000824885", "19991225");
    
} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}

<?php
session_start();  //Session start
?><html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/inbox.js"></script>
    <title>After Login</title>
</head>

<body>
    <?php
    // If user just come here and did not fill username and password for login process then this will execute 
    // It redirect to the login (main page)
    if (!isset($_SESSION["username"]) or (!isset($_SESSION["password"]))) {
        header("location: index.php");  //Redirect 
    }
    ?>
    <!-- Dislay the options when sucessfully login-->
    <div id="usercontainer2">
        <button type="button" id="inbox">Inbox</button>
        <button type="button" id="send">Send a Message</button>
        <button type="button" id="profile">Profile</button>
        <button type="button" id="logout">Log Out</button>
    </div>

    <!-- Dislay the Inbox -->
    <div id="inboxcontainer">
    </div>

    <!-- Dislay the Send Form 
    It will require receiver username and message to send the message
    -->
    <div id="sendcomtainer">
        <table>
            <tr>
                <td id="label">TO</td>
                <td><input type="text" placeholder="Receiver Username Only" id="reus" name="reusername"></td>
                <td><label id="target" >Username not found</label></td>
            </tr>
            <tr>
                <td id="label">FROM</td>
                <td><input disabled type="text" id="from" name="seusername"></td>
            </tr>
            <tr>
                <td id="label">MESSAGE</td>
                <td><input type="text" placeholder="Message Here" id="mess" name="me"></td>
            </tr>
            <tr>
                <td><button type="button" id="readysend">SEND</button></td>
            </tr>
        </table>
    </div>

    <!-- Dislay the Profile
    It will display userId , username and password in protedted form and it will provide the option to delete the account 
    just like a deactive account
    -->
    <div id="profilecomtainer">
        <table>
            <tr>
                <td id="uid">UNIQUE ID</td>
                <td><input type="text" disabled id="pid" name="id"></td>
            </tr>
            <tr>
                <td id="username">USERNAME</td>
                <td><input type="text" disabled id="pus"></td>
            </tr>
            <tr>
                <td id="password">PASSWORD</td>
                <td><input type="password" disabled id="ppass"></td>
            </tr>
            <tr>
                <td><button type="button" id="delete">Delete</button></td>
            </tr>
        </table>
    </div>
    <?php
    session_destroy();  //destroy the session   
    ?>
</body>
</html>
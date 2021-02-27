<!-- 
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
 -->
 <?php
    session_start();   //Start the seesion from here as it the first page of our app
 ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/mainpage.js"></script>
    <title>Main Page</title>
</head>
<body>
    
    <!-- That container ask username and password for login and register if you are new to our app -->
    <div id = "container">
        <div id = "firstCOntainer">
            <span id= 'facebook' >ChatBOX</span>
        </div>
        <div id = "secondContainer">
            <table>
                <tr>
                    <form>
                        <td><input type="text" placeholder="Enter Username" name="username" id="user"></td>
                        <td id="space"></td>
                        <td><input type="password" placeholder="Enter Password" name="password" id="pass"></td>
                        <td id="space"></td>
                        <td><button type="button" id = "login">Login</button></td>
                        <td id="space"></td>
                        <td><button type="button" id="register">Register?</button></td>
                    </form>
                </tr>
            </table>
        </div>
    </div>

    <!-- This the form to register a new user but this will be hide until user click register button -->
    <div id="container2">
        <div>
            <h1></h1>
            <img src="images/sm.jpg" width = 750 height = 550>
        </div>
        <div id="message5"><h1>Your account has been created!</h1></div>
        <div id="secondContainer2">
            <h2>Create an account.</h2>
            <span>Its free and always will be</span>
            <form action="createaccount.php" method="POST">
                <table id="tableMaster">
                    <tr>
                        <td><input type="text" placeholder="First name"  name="firstname" id="firstname"></td>
                        <td><input type="text" placeholder="Last name"   name="lastname" id="lastname"></td>
                    </tr>
                    <tr>
                        <td><input type="text"   placeholder="Username" name = "username" id = "username"></td>
                    </tr>
                    <tr>
                        <td><input type="password"   placeholder="Password" name ="password" id ="password"></td>
                    </tr>
                    <tr>
                        <td><button type="button" id = "btn1">Create Free Account</button></td>
                    </tr>
                    <tr>
                        <td><button type="button" id = "btn2">Back</button></td>
                    </tr>
                    <tr>
                        <td><a href="index.php"><img src = "images/police.gif" width = 50px height= 50px></a></td>
                    </tr>
                </table>              
            </form>
        </div>
    </div>

</body>
</html>
/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
*/

window.addEventListener("load", function () {
    let registerBtn = document.getElementById('register');                                //ID of register button
    let div = document.getElementById('secondContainer2');                                // get the container where register form is listed
    let div1 = document.getElementById('container');                                      // get the container where login and register button is listed
    let me = document.getElementById("message5");                                         //get message text field to extract the meesage later

    //Register button action
    registerBtn.addEventListener('click', function () {
        $("#container").fadeOut(1000);                                                   // This will fade the login conatiner slowly or in animate way
        $("#secondContainer2").animate({'borderWidth': "1px" ,'borderColor': "black"});  // This will display the register form to create account in our system in animate way
        $("#secondContainer2").slideDown();                                              // Animate way to display the record is slide down   
        $("#message5").fadeOut();                                                       
    });

    var x = 0;   //Flag

    let createAccountbtn = document.getElementById('btn1');                             //Button of create account

    // Put the action in back button with J Query     
    $("#btn2").click(function(){
        location.href = "index.php";   //redirect
    });   

    createAccountbtn.addEventListener('click', function () {
        let firstnameU = document.getElementById('firstname').value;                    //Get the value of firstname that user will write
        let lastnameU  = document.getElementById('lastname').value;                    //Get the value of lastname that user will write
        let usernameU  = document.getElementById('username').value;                    //Get the value of username that user will write
        let passwordU  = document.getElementById('password').value;                    //Get the value of password that user will write

        //If user leave any block empty then this block will execute
        if (firstnameU === null || firstnameU === ""){
            //With J-Query I will changing the styles
            $(document.forms[1].firstname).css({color: "white",placeholder: "First Name must be fill here",backgroundColor:"black"});    
        }
        else{
            //Set back to normal with JQuery
            $(document.forms[1].firstname).css("color","black").css("backgroundColor","white");
        }
        
        if(lastnameU === null || lastnameU === ""){
            //With J-Query I will changing the styles
            $(document.forms[1].lastname).css({color: "white",placeholder: "Last Name must be fill here",backgroundColor:"black"});
        }
        else{
            //Set back to normal with JQuery
            $(document.forms[1].lastname).css("color","black").css("backgroundColor","white");
        }
        
        if(usernameU === null || usernameU === ""){
            //With J-Query I will changing the styles
            $(document.forms[1].username).css({color: "white",placeholder: "Username must be fill here",backgroundColor:"black"});
        }
        else{
            //Set back to normal with JQuery
            $(document.forms[1].username).css("color","black").css("backgroundColor","white");
        }
        
        if(passwordU === null || passwordU === ""){
            //With J-Query I will changing the styles
            $(document.forms[1].password).css({color: "white",placeholder: "Password must be fill here",backgroundColor:"black"});
        }
        else{
            //Set back to normal with JQuery
            $(document.forms[1].password).css("color","black").css("backgroundColor","white");
        }
        
        //If username and password are mot empty then this block will exevcute
        if(!(firstnameU === null || firstnameU === "" || lastnameU === null || lastnameU === "" || usernameU === null || usernameU === "" || passwordU === null || passwordU === "")) {
        
        let url1 = "allrecords.php";
        fetch(url1, { credentials: 'include' })
        .then(response => response.json())
        .then(success1)

        function success1(data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].username === usernameU) {
                    x = 1; //Flag
                    break;                        
                }
            }
        if (x == 1) {   
            alert("Username already register");
        }
        else if(x == 0)
        {
            //Send the values to createacount.php to insert a new account details
            let url = "createaccount.php?firstname=" + firstnameU + "&lastname=" + lastnameU + "&username=" + usernameU + "&password=" + passwordU;
            fetch(url, { credentials: 'include' })
            
            //These will display the same block and hide that create form
            div1.style.display = "flex";
            div.style.display = "none";
            me.style.display = "flex";

            //Set the form value to null to look like new
            document.forms[1].firstname.value = "";
            document.forms[1].lastname.value = "";
            document.forms[1].username.value = "";
            document.forms[1].password.value = "";
        }
        }        
    }
    });

    let login = document.getElementById('login');                                               //Get the login button
    login.addEventListener('click', function () {                                               // login button action perform
        let user = document.getElementById('user').value;                                       //get username value
        let pass = document.getElementById('pass').value;                                       //get password value
        let url = "login.php?username=" + user + "&password=" + pass;                           //Login process

        //If username is blank then this bloxk will execute
        if(user === "" || user === null){
            //With J-Query I will changing the styles as well placeholder
            $(document.getElementById('user')).css({backgroundColor: "black",color:"white"});
            document.getElementById('user').placeholder = "Fill Username";
        }

        //If password is blank then this bloxk will execute
        else if(pass === "" || pass === null){
            //With J-Query I will changing the styles as well placeholder
            $(document.getElementById('pass')).css({backgroundColor: "black",color:"white"});
            document.getElementById('pass').placeholder = "Fill Password";
        }
        
        else{
        fetch(url, { credentials: 'include' })
            .then(response => response.json())
            .then(success)

        function success(data) {
            //If the array length is 0 means no data is extraced from data base the this block will execute
            if (data.length == 0) {
                document.getElementById('user').value = "";
                document.getElementById('pass').value = "";
                $(document.getElementById('user')).css({backgroundColor: "black",color:"white"});
                document.getElementById('user').placeholder = "Username Does not found";
                $(document.getElementById('pass')).css({backgroundColor: "black",color:"white"});
                document.getElementById('pass').placeholder = "Password Does not found";
            }
            //Login process
            else if (data[0].username === user && data[0].password === pass) {
                sessionStorage.setItem("username", data[0].username);   //Store the username in session
                sessionStorage.setItem("password", data[0].password);   //Store the password in session
                sessionStorage.setItem("id", data[0].id);               //Store the id in session
                window.location.href = "afterlogin.php"; 
                document.getElementById('user').value = "";
                document.getElementById('pass').value = "";                //redirect to afterlogin.html
            }
        }}
    });
});
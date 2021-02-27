/*
Name : Satinder Singh
Id   : 000824885
Date : 23-11-2020
Statement of Authorship : I, Satinder singh. This work is completely done by me.
*/
function reply(id) {
    let id1 = id;
    let reply = prompt("Write your reply here");
    let url = "updatemessage.php?id=" + id1 + "&reply=" + reply;
    fetch(url, { credentials: 'include' })
    let x = document.getElementById(id1);
    x.value = "Message On the Way, Refresh To suceed!";
    x.disabled = true;
}

window.addEventListener("load", function () {
    let label5 = document.getElementById('target');
    X = document.getElementById('logout');
    X.addEventListener("click",function(){
        location.href = "index.php";
    });
    //Get send container form and hide it
    $(document.getElementById('sendcomtainer')).css('display','none');
    
    //Get send button
    let send = document.getElementById('send');
    //Get the store value of username from sesion and put it in usernameBySession
    let usernameBySession = sessionStorage.getItem('username');
    //Send button action
    send.addEventListener('click', function () {
        // Get Inbox Container and hide it
        let div1 = document.getElementById('inboxcontainer');
        div1.style.display = "none";
        //Get send container form and display as flex
        let div = document.getElementById('sendcomtainer');
        div.style.display = "flex";
        //Get send container form and display as none(hide)
        let div2 = document.getElementById('profilecomtainer');
        div2.style.display = "none";
        //Get the value of element of from(Sender textbox) textbox and fill it with session value
        let from = document.getElementById('from');
        from.value = usernameBySession;
    });

    //Get send  button and set action
    let sendreadybtn = document.getElementById('readysend');
    sendreadybtn.addEventListener('click', function () {
        let x = 0;

        //Get receive username
        let reciverUsername = document.getElementById('reus');
        //Get sender username
        let senderrUsername = usernameBySession;
        //Get message
        let message = document.getElementById('mess');

        if (message.value === "" || message.value === null) {
            $(document.getElementById('mess')).css({ backgroundColor: "Black", color: "white" });
        }
        else {
            let url1 = "allrecords.php";
            fetch(url1, { credentials: 'include' })
                .then(response => response.json())
                .then(success1)

            function success1(data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].username === reciverUsername.value) {
                        x = 1;
                        break;
                    }
                    else {
                        x = 0;
                    }
                }

                if (x == 1) {

                    //Insert the messaqge into database
                    let url = "message.php?reusername=" + reciverUsername.value + "&seusername=" + senderrUsername + "&me=" + message.value;
                    fetch(url, { credentials: 'include' })
                    //set message value to null
                    document.getElementById('mess').value = "";
                    //Hide the send container 
                    let div = document.getElementById('sendcomtainer');
                    div.style.display = "none";
                }
                else if (x == 0) {
                    label5.style.display = "flex";
                }
                document.getElementById('reus').value = "";
            }
        }
    });

    label5.style.display = "none";

    //Get the inbox button
    let inboxbtn = document.getElementById('inbox');
    //Set an action
    inboxbtn.addEventListener('click', function () {
        //Make table and its first row
        let html = "<table >";
        html += "<tr><th>FROM</th><th>MESSAGE</th><th>ACTION</th></tr>";
        //get the send element form and hide it
        let div1 = document.getElementById('sendcomtainer');
        div1.style.display = "none";
        //get the element and display as flex
        let div = document.getElementById('inboxcontainer');
        div.style.display = "flex";
        //get the profile element and hide it
        let div2 = document.getElementById('profilecomtainer');
        div2.style.display = "none";
        //Fetch the url to get the message from tabale 
        let url = "getmessage.php?seusername=" + usernameBySession;
        fetch(url, { credentials: 'include' })
            .then(response => response.json())
            .then(success)

        function success(data) {
            let list = "";   //Empty string to store data one by one
            for (let i = 0; i < data.length; i++) {  //Loop goes until it reach to end of array
                if (data[i].reply === "") {    //This blk execute if reply has null value
                    //create the value and put into table cells 
                    html += "<tr><td>" + data[i].senderusername + "</td><td>" + data[i].message + "</td><td><input type = button value =Reply id='" + data[i].id + "' onclick = 'reply(this.id)'></td></tr>";
                }
                else {
                    //create the value and put into table cells
                    html += "<tr><td>" + data[i].senderusername + "</td><td>" + data[i].message + "</td><td>Your Reply : " + data[i].reply + "</td></tr>";
                }
            }
            list += html;
            html += "</table>";
            document.getElementById("inboxcontainer").innerHTML = list;   //Add the data on screen
        }
    });

    //Get the profile button
    let profilebtn = document.getElementById('profile');
    //Add action
    profilebtn.addEventListener('click', function () {
        //Get profile element and dispaly as flex.
        let div = document.getElementById('profilecomtainer');
        div.style.display = "flex";
        //GEt send container and display as none
        let div1 = document.getElementById('sendcomtainer');
        div1.style.display = "none";
        //Get inbox container and dispaly as none
        let div2 = document.getElementById('inboxcontainer');
        div2.style.display = "none";

        //put the seesion storage in let variables
        let usernameBySession = sessionStorage.getItem('username');
        let passwordBySession = sessionStorage.getItem('password');
        let IDBySession = sessionStorage.getItem('id');

        //Set that seesion value into diiferent elements
        document.getElementById('pid').value = IDBySession;
        document.getElementById('pus').value = usernameBySession;
        document.getElementById('ppass').value = passwordBySession;

        //Get the delete button
        let deletbtn = document.getElementById('delete');
        //Add function
        deletbtn.addEventListener('click', function () {
            //Confirmation promt
            let confirm1 = confirm("Are you want to delete this account?");
            //This block execute if user click yes
            if (confirm1 == true) {
                //Acoount will delete
                let url = "delete.php?id=" + IDBySession;
                fetch(url, { credentials: 'include' })
                alert("Your account is deleted!");
                location.href = "index.html";
            }
        });
    });
});
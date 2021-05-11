function openingFunction(){
    alert('BobaFest will be held on 11-25 June 2021!');
}

function validateForm(){
    var number = document.forms["regisform"]["phone"].value;
    var n = number.length;
    var check = number.slice(0, 2);
    if (check !== "08"){
        alert('First two digits of the phone number must be 08.');
        return false;
    }else if(n < 0 || n > 14){
        alert('Phone number must be between 0-14 digits.');
        return false;
    }else if(isNaN(number)){
        alert('Phone number must be numeric');
        return false;
    }else{
        alert('Registration success!'); 
        return true;
    }
}

function requestPost(){
    var dataUser = {
        name:  document.forms["regisform"]["name"].value,
        email: document.forms["regisform"]["email"].value,
        phone: document.forms["regisform"]["phone"].value,
        event: document.forms["regisform"]["event"].value
    };
    var dataString = JSON.stringify(dataUser);
    var ajax = new XMLHttpRequest();
    ajax.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    ajax.setRequestHeader("content-type", "application/json");
    ajax.send(dataString);
}


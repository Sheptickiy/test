document.querySelector('#signup-firstname').onblur= function(event){
    event.preventDefault();
    console.log('work');
    const firstErr=document.getElementById("firstErr");
    const lastErr=document.getElementById("lastErr");
    let firstname = document.querySelector('#signup-firstname').value;
    let lastname = document.querySelector('#signup-lastname').value;
    let city = document.querySelector('#signup-city').value;
    let address = document.querySelector('#signup-address').value;
    console.log(firstname);
    if(firstname === ""){
        firstErr.innerHTML="Имя не может быть пустым";
    }else {
        firstErr.innerHTML = "";
    }
    /*if(lastname === ""){
        lastErr.innerHTML="Фамилия не может быть пустой";
    }else{
        lastErr.innerHTML="";}*/
}

/*document.querySelector('#signup-lastname').onblur= function(event){
    event.preventDefault();
    console.log('work');
    //let firstErr=document.getElementById("firstErr")
    let lastErr=document.getElementById("lastErr")
    //let firstname = document.querySelector('#signup-firstname').value;
    let lastname = document.querySelector('#signup-lastname').value;
    //let city = document.querySelector('#signup-city').value;
    //let address = document.querySelector('#signup-address').value;
    console.log(lastname);
    /*if(firstname === ""){
        firstErr.innerHTML="Имя не может быть пустым";
    }else {
        firstErr.innerHTML = "";
    }
    if(lastname === ""){
        lastErr.innerHTML="Фамилия не может быть пустой";
    }else{
        lastErr.innerHTML="";}
}*/
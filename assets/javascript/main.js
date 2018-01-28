document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){
    document.getElementById("helloMessage").innerHTML = "Hello " + document.getElementById("nameEntry").value +"!";
}
console.log("hello");
function toggleText(){
let p = document.getElementById("para");
    
    if(p.style.display=== "none"){
        p.style.display = "block";
        p.classList.add("active");

    }
     else{
        p.style.display = "none";
    }
}
const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function(button) {
    button.addEventListener("click", (e) => {
        if(e.target.id == "white"){
            body.style.backgroundColor = e.target.id
        } else 
        if(e.target.id == "black"){
            body.style.backgroundColor = e.target.id
        } else 
        if(e.target.id == "orange"){
            body.style.backgroundColor = e.target.id
        } else 
        if(e.target.id == "purple"){
            body.style.backgroundColor = e.target.id
        } else 
        if(e.target.id == "red"){
            body.style.backgroundColor = e.target.id
        } else 
        if(e.target.id == "lime"){
            body.style.backgroundColor = e.target.id
        }
        
        
        
    })
    
})

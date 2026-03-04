const form = document.getElementById("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const emailField = document.getElementById("emailField");
    
    if (!emailRegex.test(emailField.value)) {
        console.log("Incorrect Email Format");
        document.getElementById("emailErr").innerHTML = "Incorrect Email Format";    
        document.getElementById("emailErr").style.color = "red";    
        emailField.style.borderColor = "red";    
    }
    else {
        document.getElementById("emailErr").innerHTML = "";    
        emailField.style.borderColor = "green";    
    }
})









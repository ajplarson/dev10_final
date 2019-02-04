//from click to add items code along
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function resetForm() {
    clearErrors();
    document.forms["numberFun"]["nameInput"].value = "Enter Name";
    document.forms["numberFun"]["emailInput"].value = "Enter Email";
	document.forms["numberFun"]["phoneInput"].value = "Phone Number";
    document.forms["numberFun"]["textArea1"].value = "";
    document.getElementById("submitButton").innerText = "Send Request";
	document.forms["numberFun"]["nameInput"].focus();
}
function validateItems() {
    clearErrors();
    var name1 = document.forms["numberFun"]["nameInput"].value; 
    if (name1 == "" || isNaN(name1) != true) {
        alert("Please enter your name using letters.");
        document.forms["numberFun"]["nameInput"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["nameInput"].focus();
        return false;
    }
	var name1 = document.forms["numberFun"]["phoneInput"].value; 
    if (name1 == "" || isNaN(name1) == true) {
        alert("Please enter your phone number using numbers.");
        document.forms["numberFun"]["phoneInput"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["phoneInput"].focus();
        return false;
    }
	location.reload();
	alert("We have successfully received your information! Thank you for reaching out. We will be in touch shortly")
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}
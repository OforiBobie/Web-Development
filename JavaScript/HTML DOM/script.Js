//function to validate the form
function validateForm(){
    //get the data from the form(name and email)
    var name=document.getElementById("name").value;
    var email= document.getElementById("email").value;
    //access the paragraph to store the error
    var error=document.getElementById("error");
    //chect if the name and email is empty
    if(name==""|| email==""){
        error.innerHTML="All fields are required";
    return false;//prevent the form from submitting itself
    }
    error.innerHTML="";//clears the error message
    alert("Form submitted successfully");//alerts the user that the form has been submitted
    return true;//submit the form
}
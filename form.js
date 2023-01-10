
function sendMessage(name,email,message){

    fetch("").then(output=>{
        console.log(output);
    })

}

var name = document.getElementById('contact-name')
var email = document.getElementById('contact-email')
var message = document.getElementById('contact-messgae')
var submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click',{

    sendMessage(name,email,message)

})
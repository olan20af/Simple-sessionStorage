const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector('form');
const personalMessage = document.querySelector("#personalMessage");



function nameDisplayCheck() {
    if(sessionStorage.getItem('fname') && sessionStorage.getItem('lname')){
        let fname = sessionStorage.getItem("fname");
        let lname = sessionStorage.getItem("lname");

        personalMessage.textContent = "Velkommen " + fname + " " + lname;

    }
}

submitBtn.addEventListener('click', function(){

    sessionStorage.setItem('fname', fname.value);
    sessionStorage.setItem('lname', lname.value);
    nameDisplayCheck();


});

form.addEventListener('submit', function(e) {
    e.preventDefault();

});



document.body.onload = nameDisplayCheck();

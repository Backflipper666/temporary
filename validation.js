const inputs = document.querySelectorAll("input");
let reg = /[a-z]/gi;



const patterns = {
    phone: /^\d{11}$/,
    fname: /^[a-z]{2,20}$/i,
    lname:/^[a-z]{2,20}$/i,
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
};

function validate(field, regex) {
   //console.log(regex.test(field.value)); 
   if(regex.test(field.value)){
       field.className = 'valid'; 
   } else {
    field.className = 'invalid';
   }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (e)=>{
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})

const form = document.getElementById("form");
let nameWarning = document.querySelector("span.warning.name");
const fname = document.querySelector("input.fname");


form.addEventListener("submit", (e) => {
    let messages = [];
    if (fname.value === '' || fname.value === null){
        messages.push("Name is required")
    }
    if (fname.classList.contains("fname")) {
        console.log("Has got it");
    }
    if ($(".warning").css('color', 'red')) {
        console.log("yahaha");
    }
    //e.preventDefault()
}) 
/* $(".warning").css('color', 'blue');
$(".warning").css("opacity");
console.log($(".warning").css("opacity")); */

form.addEventListener("submit", (e)=> {
    console.log($(".warning").css("opacity"));
})

form.addEventListener("submit", (e) => {
    if (($(".warning").css("opacity")) == 1) e.preventDefault();
})

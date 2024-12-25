
//all elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");


//erorr message for input
const showErorr = (input, message) => {              //showErorr function 

    let parentElement = input.parentElement;                //inputka parentka ah
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");  
    const successIcon = parentElement.querySelectorAll("i") [0];  //successIconka ah
    const errorIcon = parentElement.querySelectorAll("i") [1];  //successIconka ah
    

    errorIcon.style.visibility = 'visible';  //submit marka la dhaho error iconka ayaa soobaxaya
    successIcon.style.visibility = 'hidden';  // suusan soobixin isagu
    small.innerText = message;  //error message ka
    
}                   

//success message for input
const showSuccess = (input, message) => {              //showSuccess function 

    let parentElement = input.parentElement;                //inputka parentka ah
    parentElement.classList = 'form-control success';
    const successIcon = parentElement.querySelectorAll("i") [0];  //successIconka ah
    const errorIcon = parentElement.querySelectorAll("i") [1];  //successIconka ah
    

    errorIcon.style.visibility = 'hidden';  //erro iconka yuusan soobixin isagu
    successIcon.style.visibility = 'visible';  // inputka wixii loogu talagalay marka lagaliyo success iconka ayaa soobaxaya
   
    

}   



const checkempty = (Elements) => {                    //checkempty function barta laga maamulayo inputka isagoo madhan inaan samit la dhihi karin

    Elements.forEach((element) => {
        if (element.value === "") {
            showErorr(element,'input required'); //showErorr functionka barta laga maamulayo error message ka isagoo madhan inaan samit la dhihi karin

        }else{
            showSuccess(element); //showSuccess functionka barta laga maamulayo hadii wax lagaliyo in uu soobaxo success iconka

              }
        }
    );
    
}



//check email
const checkEmail = (email) => {                   //checkEmail function emailka 
     const reg= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //emailka regularkiisa ah

     if (reg.test(email.value)) {
            showSuccess(email);  //soomuuji success iconka
      }else{
            showErorr(email, 'Email is not valid');  //soomuuji error massage ka
      }
    }

//check password length
const checkPasswordLength = (password, min, max) => {  //checkPasswordLength function passwordka
    if (password.value.length < min) {
        showErorr(password, `Password must be at least ${min} characters`);
    }else if (password.value.length > max) {
        showErorr(password, `Password must be less than ${max} characters`);
    }else{
        showSuccess(password);
    }
}

   // form event listener submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkempty([username, email, password, confirmpassword]); // submit fahansii checkempty jira
    checkEmail(email); 

    checkPasswordLength(password, 6,25); 
    checkPasswordLength(confirmpassword, 6,25);
    
    
});
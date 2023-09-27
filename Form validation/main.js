let user_name=document.querySelector('.name');
let email=document.querySelector('.email');
let password=document.querySelector('.password');
let C_password=document.querySelector('.cpassword');
let phone=document.querySelector('#phone');
let form=document.querySelector('.form');
let msg=document.querySelector('small');

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validation();
});

function validation(){
    let name_value=user_name.value.trim();
    let email_value=email.value.trim();
    let password_value=password.value.trim();
    let C_password_value=C_password.value.trim();
    let phone_value=phone.value.trim();


    //Name valid:
    if(name_value==""){
        let family=user_name.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter username";
        msg.classList.add('err');
        family.classList.add('error');
    }
    else if(name_value>=20){
        let family=user_name.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter 20 character";
        msg.classList.add('err');

        family.classList.add('error');
    }
    else{
        let family=user_name.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="correct username";
        msg.classList.add('succ');

        family.classList.add('correct');
    }

    //Email valid:
    if(email_value==""){
        let family=email.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter email";
        msg.classList.add('err');

        family.classList.add('error');
    }
    else if(email_value.length>=50){
        let family=email.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter 50 character";
        msg.classList.add('err');

        family.classList.add('error');
    }
    else if(regex.test(email_value)){
        let family=email.parentElement;
        let msg=family.querySelector('.message');
        msg.innerText="Correct email";
        msg.classList.add('succ');

        family.classList.add('correct'); 
    }
    else{
        let family=email.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Correct email";
        msg.classList.add('succ');

        family.classList.add('correct');
    }

    //Password valid:
    if(password_value==""){
        let family=password.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter correct email";
        msg.classList.add('err');

        family.classList.add('error');
    }
    else if(password_value.length>8){
        let family=password.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter 8 character";
        msg.classList.add('err');

        family.classList.add('error'); 
    }
    else{
        let family=password.parentElement;
        let msg=family.querySelector('.message');
        msg.innerText="Correct password";
        msg.classList.add('succ');

        family.classList.add('correct'); 
    }

    //Confirm password:
    if(C_password_value==""){
        let family=C_password.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter confirm password";
        msg.classList.add('err');

        family.classList.add('error'); 
    }
    else if(C_password_value!==password_value){
        let family=C_password.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter correct confirm password";
        msg.classList.add('err');

        family.classList.add('error'); 
    }
    else if (C_password_value==password_value){
        let family=C_password.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Correct confirm password";
        msg.classList.add('succ');

        family.classList.add('correct'); 
    }

    //phone valid:
    if(phone_value==""){
        let family=phone.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter phone number";
        msg.classList.add('err');

        family.classList.add('error'); 
    }
    else if(phone_value==NaN){
        let family=phone.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter correct phone number";
        msg.classList.add('err');

        family.classList.add('error'); 
    }
    else if(phone_value.length>10){
        let family=phone.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter 10 digit number only";
        msg.classList.add('err');

        family.classList.add('error'); 
    }
    else if(phone_value.length<10){
        let family=phone.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Please enter 10 digit number only";
        msg.classList.add('err');

        family.classList.add('error'); 
    }
    else{
        let family=phone.parentElement;
        let msg=family.querySelector('.message');

        msg.innerText="Correct phone number";
        msg.classList.add('succ');

        family.classList.add('correct'); 
    }


}

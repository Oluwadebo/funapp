
detai = [];
const signinn = ()=>{
    location.assign("signin.html")
}
const signup = ()=>{
    if (localStorage.member) {
        detai = JSON.parse(localStorage.member)
    }
    let gd = document.getElementById('gen');
    let gd2 = gd.options[gd.selectedIndex].text;
    informat = {
        Firstname:firstname.value,
        userLastname:lastname.value,
        userAddress:address.value,
        userEmail:email.value,
        userPassword:password.value,
        userNumber:number.value,
        userGender:gd2,
        userContact:[],
        userNote:[],
    }
    if(firstname.value == "" ||  lastname.value == "" || address.value == ""  || email.value == "" || password.value == "" || number.value == "" || gd2 == ""){
        message1.innerHTML = "Enter the value of the firstname"
        message1.style.color = "red";
        message2.innerHTML = "Enter the value of the Lastname"
        message2.style.color = "red";
        message3.innerHTML = "Enter the value of the address"
        message3.style.color = "red";
        message4.innerHTML = "Enter the value of the email"
        message4.style.color = "red";
        message5.innerHTML = "Enter the value of the password"
        message5.style.color = "red";
        message6.innerHTML = "Enter the value of the phoneNumber"
        message6.style.color = "red";
        message7.innerHTML = "Choose your gender"
        message7.style.color = "red";
    }else{
        detai.push(informat);
        localStorage.member = JSON.stringify(detai);
        console.log(detai);
        firstname.value = "";
        lastname.value = "";
        address.value = "";
        email.value = "";
        number.value = "";
        location.assign("signin.html");
    }
}
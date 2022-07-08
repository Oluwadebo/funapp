// index javascricpt
const signinu = ()=>{
    location.assign("siginup.html")
}
const signinn = ()=>{
    location.assign("signin.html")
}
//sigin-up javascript
details = [];
const getPreviousValues = ()=>{
    if (localStorage.member) {
        details = JSON.parse(localStorage.member)
    }
}
const signup = ()=>{
    getPreviousValues()
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
        message1.innerHTML = "Enter your firstname"
        message1.style.color = "red";
        message2.innerHTML = "Enter your Lastname"
        message2.style.color = "red";
        message3.innerHTML = "Enter your address"
        message3.style.color = "red";
        message4.innerHTML = "Enter your email"
        message4.style.color = "red";
        message5.innerHTML = "Enter your password"
        message5.style.color = "red";
        message6.innerHTML = "Enter your phoneNumber"
        message6.style.color = "red";
        message7.innerHTML = "Choose your gender"
        message7.style.color = "red";
    }else{
        details.push(informat);
        localStorage.member = JSON.stringify(details);
        location.assign("signin.html");
        firstname.value = "";
        lastname.value = "";
        address.value = "";
        email.value = "";
        number.value = "";
    }
}
//sigin-in javascript
const sigin = ()=>{
    let val = JSON.parse(localStorage.getItem("member"));
    if (email.value != "" && password.value != "") {
        for(const a of val){
            if (a ["userEmail"] == email.value && a["userPassword"] == password.value) {
                location.assign("home.html");
                localStorage.userEmail = JSON.stringify(email.value);
            }else{
                message8.innerHTML = "Enter the correct email"
                message8.style.color = "red";
                message9.innerHTML = "Enter the correct password"
                message9.style.color = "red";
            }
        }
    }
    email.value = "";
    password.value = "";
}
//home javascript
// if(localStorage.member){
//     details = JSON.parse(localStorage.getItem("member"));
//     // console.log(details);
//     details.map((item,index)=>{
//         userName.innerHTML = `${details[index].Firstname}  ${details[index].userLastname}`
//     })
// }
// details = JSON.parse(localStorage.getItem("member"));
// var com;
// for (let i = 0; i <details.length; i++) {
//    alert()
    
// }
// // details.map((item,index)=>{
// //     var com;
// //     com=details[index];
// // })
// // console.log(com);
// // race = []
// const save = ()=>{
//     informatio = {  
//         userTitle:title.value,
//         userNote:note.value,
//     }
//     com.push(informatio)
//     console.log(com);
//     details.map((item,index)=>{
//         com=details[index];
//         // console.log(details); 
//     })
// }
// for (let index = 0; index <details.length; index++) {
//     details[index]=com;  
// }
// details.map((item,index)=>{
//     details[index]=com;
// })

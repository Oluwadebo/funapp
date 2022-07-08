//sigin-up javascript
detai = [];
if (localStorage.progect) {
    detai = JSON.parse(localStorage.progect)
}
const signinn = ()=>{
    location.assign("signin.html")
}
const signup = ()=>{
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
    // if(firstname.value == "" ||  lastname.value == "" || address.value == ""  || email.value == "" || password.value == "" || number.value == "" || gd2 == ""){
    //     message1.innerHTML = "Enter your firstname"
    //     message1.style.color = "red";
    //     message2.innerHTML = "Enter your Lastname"
    //     message2.style.color = "red";
    //     message3.innerHTML = "Enter your address"
    //     message3.style.color = "red";
    //     message4.innerHTML = "Enter your email"
    //     message4.style.color = "red";
    //     message5.innerHTML = "Enter your password"
    //     message5.style.color = "red";
    //     message6.innerHTML = "Enter your phoneNumber"
    //     message6.style.color = "red";
    //     message7.innerHTML = "Choose your gender"
    //     message7.style.color = "red";
    // }else{
    //     detai.push(informat);
    //     localStorage.progect = JSON.stringify(detai);
    //     console.log(detai);
    //     firstname.value = "";
    //     lastname.value = "";
    //     address.value = "";
    //     email.value = "";
    //     number.value = "";
    //     location.assign("signin.html");
    // }
}
//sigin-in javascript
// const sigin = ()=>{    
//     var userEl = email.value;
//     var userPrd = password.value;
//     // let val = JSON.parse(localStorage.getItem("date"))
//     let val = JSON.parse(localStorage.getItem("progect"));
//     if (email.value != "" && password.value != "") {
//         for(const k of val){
//             if (k["email"] == email.value && k["password"] == password.value) {
//                 localStorage.email=JSON.stringify(email.value)
//                 cons
//                 ole.log(k
//                     );
//             }
//         }
//     }
    // detai.forEach(element => {
        
    // });
    // detai.map((item,index)=>{
        
    // })    
    //     else if (userEl !== detai[index].userEmail && userPrd !== detai[index].userPassword) {
    //         message8.innerHTML = "Enter your email"
    //         message8.style.color = "red";
    //         message9.innerHTML = "Enter your password"
    //         message9.style.color = "red";
    //     }
    // })
    // console.log(detai);

// }
//home javascript
// if(localStorage.progect){
//     detai = JSON.parse(localStorage.getItem("progect"));
//     // console.log(detai);
//     detai.map((item,index)=>{
//         userName.innerHTML = `${detai[index].Firstname}  ${detai[index].userLastname}`
//     })
// }
// detai = JSON.parse(localStorage.getItem("progect"));
// var com;
// for (let i = 0; i <detai.length; i++) {
//    alert()
    
// }
// // detai.map((item,index)=>{
// //     var com;
// //     com=detai[index];
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
//     detai.map((item,index)=>{
//         com=detai[index];
//         // console.log(detai); 
//     })
// }
// for (let index = 0; index <detai.length; index++) {
//     detai[index]=com;  
// }
// detai.map((item,index)=>{
//     detai[index]=com;
// })

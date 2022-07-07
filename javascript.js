//sigin-up javascript
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
//sigin-in javascript
const sigin = ()=>{
    var userEl = email.value;
    var userPrd = password.value;
    detai = JSON.parse(localStorage.getItem("member"));
    detai.map((item,index)=>{
        if (userEl == detai[index].userEmail && userPrd == detai[index].userPassword) {
            location.assign("home.html");
            userEl = "";
            userPrd = "";
        }
        else if (userEl !== detai[index].userEmail && userPrd !== detai[index].userPassword) {
            message8.innerHTML = "Enter your email"
            message8.style.color = "red";
            message9.innerHTML = "Enter your password"
            message9.style.color = "red";
        }
    })
    console.log(detai);
}
//home javascript
if(localStorage.member){
    detai = JSON.parse(localStorage.getItem("member"));
    console.log(detai);
    detai.map((item,index)=>{
        userName.innerHTML = `${detai[index].Firstname}  ${detai[index].userLastname}`
    })
}
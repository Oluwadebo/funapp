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
            if (a["userEmail"] == email.value && a["userPassword"] == password.value) {
                location.assign("home.html");
                localStorage.userEmail = JSON.stringify(email.value);
            }else{
                message8.innerHTML = "Enter the correct email"
                message8.style.color = "red";
                message9.innerHTML = "Enter the correct password"
                message9.style.color = "red";
            }
        }
    }else{
        message8.innerHTML = "Enter your email"
        message8.style.color = "red";
        message9.innerHTML = "Enter your password"
        message9.style.color = "red";
    }
    email.value = "";
    password.value = "";
}
//home javascript
var val = JSON.parse(localStorage.getItem("member"));
var mail = JSON.parse(localStorage.getItem("userEmail"));
let receiver;
val.map((item,index)=>{
    if (val[index].userEmail == mail) {
        receiver = val[index].userNote
    }
})
const save = ()=>{
    if (title.value != "" && note.value != ""){
        informatio = {  
            userTitle:title.value,
            userNote:note.value,
        }
        receiver.push(informatio);
        display.innerHTML = "";
        only();
        title.value = "";
        note.value = "";
        val.map((item,index)=>{
            if (val[index].userEmail == mail) {
                val[index].userNote = receiver;
                console.log(val[index].userNote);
            }
        })
        localStorage.member = JSON.stringify(val);
    }else{
        alert("This is an empty note, it will not be saved")
    }
}
const only = ()=>{
    for (var index = receiver.length -1; index >= 0; index--) {
        display.innerHTML += `<div class="container col-12 col-md-6 card my-2" style="background-color: #15273B;">
            <h2 class="text-light">${receiver[index].userTitle}</h2>
            <p class="text-light">${receiver[index].userNote}</p>
            <div class="container pb-1">
                <button class="btn me-3" onclick='del(${index})' style="background-color:#E01541;color:white;">Delet Note</button>
                <button class="btn btn-primary me-3" onclick='edit(${index})' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit Note</button>
            </div>
        </div>`
    }
}
const del = (index)=>{
    let answer = confirm("Are you sure, you want to delet this note.");
    if (answer === true) {      
        let filteredArray = receiver.filter((item,ind)=>index != ind);
        receiver = filteredArray;
        val.map((item,index)=>{
            if (val[index].userEmail == mail) {
                val[index].userNote = receiver;
                console.log(val[index].userNote);
            }
        })
        display.innerHTML = "";
        only();
        localStorage.member = JSON.stringify(val);
    }
}
let ind;
const edit = (index)=>{
    let answer = confirm("Are you sure, you want to edit this note. if yes, you can delet the previous one, if not needed.")
    if (answer === true) {        
        title.value = receiver[index].userTitle;
        note.value = receiver[index].userNote;
        val.map((item,index)=>{
            if (val[index].userEmail == mail) {
                val[index].userNote = receiver;
                console.log(val[index].userNote);
            }
        })
        ind = index;
        display.innerHTML = "";
    }else{
        location.reload()
    }
}
const Update = ()=>{
    location.reload()
}
const logout = ()=>{
    localStorage.removeItem("userEmail")
}

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
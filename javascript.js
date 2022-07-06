
detai = [];
const signinn = ()=>{
    location.assign()
}
const signup = ()=>{
    if (localStorage.member) {
        detai = JSON.parse(localStorage.member)
    }
    var userFname = firstname.value;
    var userLname = lastname.value;
    var userAress = address.value;
    var usermail = email.value;
    var userNber = number.value;
    let gd = document.getElementById('gen');
    let gd2 = gd.options[gd.selectedIndex].text;
    informat = {
        Firstname:userFname,
        userLastname:userLname,
        userAddress:userAress,
        userEmail:usermail,
        userNumber:userNber,
        userGender:gd2,
    }
    detai.push(informat);
    localStorage.member = JSON.stringify(detai);
    console.log(detai);
    firstname.value = "";
    lastname.value = "";
    address.value = "";
    email.value = "";
    number.value = "";
}
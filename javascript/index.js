function passcheck(){
    if(passwordform.pass.value == "kamikazeattack"){
        location.href='./vip.html';
        return true;
    } else {
        alert("パスワードが違う");
        return false;
    }
}

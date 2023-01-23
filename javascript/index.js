function addchange() {
    if (window.outerWidth < 630) {
        var AdChange001 = document.getElementById("ad01");
        AdChange001.innerHTML = '<script src="https://adm.shinobi.jp/s/f5c04764bd4e9eee5ec54fe0e9c6773a"></script><script src="https://adm.shinobi.jp/s/f5c04764bd4e9eee5ec54fe0e9c6773a"></script>' ;
    }
}
function passcheck(){
    if(passwordform.pass.value == "kamikazeattack"){
        location.href='./vip.html';
        return true;
    } else {
        alert("パスワードが違う");
        return false;
    }
}


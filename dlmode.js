var flag = false;

function darkmode() {
    
    var bd = document.querySelector(".nd");
    var cds = document.getElementsByClassName("card");
    var tlt = document.getElementsByClassName("titlePKM");
    var circle = document.getElementsByClassName("circleimg");
    var tltt = document.getElementsByClassName("format-input");

    bd.classList.toggle('dark');

    for(i = 0; i <= tltt.length -1; i ++){
        tltt[i].classList.toggle('dark');
    }

    for(i = 0; i <= cds.length -1; i ++){
        cds[i].classList.toggle('dark');
        tlt[i].classList.toggle('dark');
        circle[i].classList.toggle('dark');
    }

    flag ? flag = false : flag = true;

}
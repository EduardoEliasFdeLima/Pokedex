function darkmode() {
    var bd = document.querySelector(".nd"); // Retorna o primeiro elemento
    var cds = document.getElementsByClassName("card");
    var tlt = document.getElementsByClassName("titlePKM");
    var circle = document.getElementsByClassName("circleimg");
    var tltt = document.querySelector(".inputpkm");

    
    if (bd) {
        bd.classList.toggle('dark');
    }

    tltt.classList.toggle('dark');

    for(i = 0; i <= cds.length; i ++){
        cds[i].classList.toggle('dark');
        tlt[i].classList.toggle('dark');
        circle[i].classList.toggle('dark');
    }

   

}

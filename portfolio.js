<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

var typed = new Typed('#element', {
    strings: ['programmer', 'web developer', 'photo editor'],
    typeSpeed: 50,
});


var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("activetab");

}


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";

}
function closemenu() {
    sidemenu.style.right = "-200px";

}

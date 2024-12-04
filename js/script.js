const chkDarkMode = document.getElementById("chkDarkMode");
const chkMenu = document.getElementById("chkMenu");

const menu = document.getElementById("menu");

chkMenu.addEventListener("change", () => {
    menu.getElementsByTagName("ul")[0].classList.toggle("open")
})

window.onresize = menuReset

function menuReset() {
    if(window.matchMedia("(min-width: 560px)").matches) {
        menu.getElementsByTagName("ul")[0].classList.remove("open")
    }
}

chkDarkMode.addEventListener('change', () => {
    document.body.classList.toggle("dark-mode")
    for(const item of document.body.getElementsByTagName("*")){
        item.classList.toggle("dark-mode")
    }
    if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem('dark-mode', 'enabled')
    } else {
        localStorage.setItem('dark-mode', 'disabled')
    }
})

if (localStorage.getItem('dark-mode') === 'enabled') {
    for(const item of document.body.getElementsByTagName("*")){
        item.classList.add("dark-mode")
    }
    document.body.classList.add('dark-mode');
    chkDarkMode.checked = true; 
}
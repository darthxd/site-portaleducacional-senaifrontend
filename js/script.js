const chkDarkMode = document.getElementById("chkDarkMode");

const menu = document.getElementById("menu");
const arrayContainer = document.querySelectorAll(".container");

chkDarkMode.addEventListener('change', () => {
    arrayContainer.forEach(container => {
        container.classList.toggle("dark-mode");
        for(const item of container.getElementsByTagName("*")){
            item.classList.toggle("dark-mode")
        }
        if(container.classList.contains("dark-mode")) {
            localStorage.setItem('dark-mode', 'enabled')
        } else {
            localStorage.setItem('dark-mode', 'disabled')
        }
    });
})

if (localStorage.getItem('dark-mode') === 'enabled') {
    arrayContainer.forEach(container => {
        container.classList.add('dark-mode');
        for(const item of container.getElementsByTagName("*")){
            item.classList.toggle("dark-mode")
        }
    })
    chkDarkMode.checked = true; 
}
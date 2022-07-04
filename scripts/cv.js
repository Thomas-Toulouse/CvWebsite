debugger
window.open = Initialiser();
window.onload = Initialiser();

onclick = "DarkModeToggle()"

function Initialiser() {
    let element = document.body;
    let themeIcon = document.getElementById("themeIcon");
    let aboutMeBox = document.getElementById("AboutMe");
    console.log(document.body)
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(e => {
        if (e.matches) {
            element.classList.toggle("dark-mode");

            aboutMeBox.classList.toggle("dark-mode-box")

            themeIcon.innerHTML = "light_mode"
                // Theme set to dark.
        } else {
            element.classList.toggle("dark-mode");

            themeIcon.innerHTML = "dark_mode"
                // Theme set to light.
        }
    });


}

function DarkModeToggle() {
    let element = document.body;
    let themeIcon = document.getElementById("themeIcon");
    let aboutMeBox = document.getElementById("AboutMe");
    debugger

    if (element.classList.contains("dark-mode")) {
        element.classList.toggle("dark-mode");
        aboutMeBox.classList.toggle("dark-mode-box")
        themeIcon.innerHTML = "light_mode"
    } else {
        element.classList.toggle("dark-mode");
        aboutMeBox.classList.toggle("dark-mode-box")
        themeIcon.innerHTML = "dark_mode"
    }


}
//debugger
/*window = Initialiser();*/




document.addEventListener('DOMContentLoaded', function() {
    Initialiser();
}, false);

function Initialiser() {
    debugger
    let element = document.body;
    let themeIcon = document.getElementById("themeIcon");
    let aboutMeBox = document.getElementById("AboutMe");
    var initialMode = "dark";
    var prefersColorSchemeDark = window.matchMedia("prefers-color-scheme: dark");

    if (prefersColorSchemeDark.matches) {
        initialMode = "dark";
        /*document.body.classList.add("dark-mode");
        aboutMeBox.classList.add("dark-mode-box");
*/
    }

    if (localStorage.getItem("initialMode") == null) {
        localStorage.setItem("initialMode", initialMode);
    }

    if (localStorage.getItem("currentMode") == null) {
        localStorage.setItem("currentMode", initialMode);
    } else {

        let currentMode = localStorage.getItem("currentMode");
        if (currentMode == "dark" && currentMode != initialMode) {
            /*document.body.classList.add("light-mode");
            aboutMeBox.classList.add("light-mode-box");*/
            console.log(initialMode, currentMode)
        } else if (currentMode == "light" && currentMode != initialMode) {
            console.log(initialMode, currentMode)
                /*document.body.classList.add("dark-mode");
                aboutMeBox.classList.add("dark-mode-box");*/

        }

    }

    //debugger
    /*let element = document.body;
     let themeIcon = document.getElementById("themeIcon");
     let aboutMeBox = document.getElementById("AboutMe");
     console.log(document.body)
     const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
     const lightthemeMq = window.matchMedia("(prefers-color-scheme: light)")
     if (darkThemeMq.matches) {
         element.classList.toggle("dark-mode");

         aboutMeBox.classList.toggle("dark-mode-box")

         themeIcon.innerHTML = "light_mode"
     } else if (lightthemeMq.matches) {
         element.classList.toggle("lightTheme");
         aboutMeBox.classList.toggle("ligthTheme-box")
         themeIcon.innerHTML = "dark_mode"
     }
     console.log(document.body)*/
    /*  darkThemeMq.addListener(e => {

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
     }); */


}
//determines if the user has a set theme
/**
 * Adopt:
 * the theme from the system preferences; or
 * the previously stored mode from the `localStorage`
 */


/**
 * Process the toggle then store to `localStorage`
 */
// if (localStorage.getItem("currentMode") == null) {
//     localStorage.setItem("currentMode", initialMode);
// } else {
//     let currentMode = localStorage.getItem("currentMode");
//     if (currentMode == "dark" && currentMode != initialMode) {
//         document.body.classList.add("dark-mode");
//     } else if (currentMode == "light" && currentMode != initialMode) {
//         document.body.classList.add("light-mode");
//     }
// }

// /**
//  * Process the toggle then store to `localStorage`
//  */
// document.getElementById('themeIcon').addEventListener("onclick", function() {
//         var initialMode = localStorage.getItem("initialMode");
//         let currentMode = localStorage.getItem("currentMode");

//         if (currentMode == "dark" && currentMode == initialMode) {
//             document.body.classList.add("light-mode");
//             localStorage.setItem("currentMode", "light");
//         } else if (currentMode == "light" && currentMode == initialMode) {
//             document.body.classList.add("dark-mode");
//             localStorage.setItem("currentMode", "dark");
//         } else if (currentMode != initialMode) {
//             document.body.removeAttribute("class");
//             if (currentMode == "dark") {
//                 localStorage.setItem("currentMode", "light");
//             } else {
//                 localStorage.setItem("currentMode", "dark");
//             }
//         }
//     },
//     false);



function DarkModeToggle() {
    debugger
    var initialMode = localStorage.getItem("initialMode");
    let currentMode = localStorage.getItem("currentMode");
    let element = document.body;
    let themeIcon = document.getElementById("themeIcon");
    let aboutMeBox = document.getElementById("AboutMe");
    if (currentMode == "dark" && currentMode == initialMode) {
        document.body.classList.add("light-mode");
        aboutMeBox.classList.add("light-mode-box");
        //themeIcon.innerHTML = "dark_mode";
        localStorage.setItem("currentMode", "light");
    } else if (currentMode == "light" && currentMode == initialMode) {
        document.body.classList.add("dark-mode");
        aboutMeBox.classList.add("dark-mode-box");
        // themeIcon.innerHTML = "light_mode";
        sessionStorage.setItem("currentMode", "dark");
    } else if (currentMode != initialMode) {
        aboutMeBox.removeAttribute("class");
        document.body.removeAttribute("class");
        if (currentMode == "dark") {
            document.body.classList.add("light-mode");
            aboutMeBox.classList.add("light-mode-box");
            localStorage.setItem("currentMode", "light");
        } else {
            document.body.classList.add("dark-mode");
            aboutMeBox.classList.add("dark-mode-box");
            localStorage.setItem("currentMode", "dark");
        }
    }


    // console.log(document.body)
    // let element = document.body;
    // let themeIcon = document.getElementById("themeIcon");
    // let aboutMeBox = document.getElementById("AboutMe");
    // debugger

    // if ( /*themeIcon.innerHTML == "dark_mode"*/ element.classList.contains("dark-mode")) {
    //     element.classList.replace("dark-mode", "ligthTheme");
    //     aboutMeBox.classList.replace("dark-mode-box", "lightTheme-box")
    //     themeIcon.innerHTML = "light_mode"
    //         // element.classList.toggle("ligthTheme");
    //     console.log(document.body)
    // } else if ( /*themeIcon.innerHTML = "light_mode"*/ element.classList.contains("ligthTheme")) {
    //     element.classList.toggle("ligthTheme");
    //     element.classList.toggle("dark-mode");
    //     aboutMeBox.classList.toggle("dark-mode-box")
    //     themeIcon.innerHTML = "dark_mode"
    //     console.log(document.body)
    // }
    /*else {
           element.classList.toggle("dark-mode");
           aboutMeBox.classList.toggle("dark-mode-box")
           themeIcon.innerHTML = "dark_mode"*/
}
debugger
window.open= Initialiser();
window.onload = Initialiser();
//document.getElementById("#hboxMenu li #themeIcon").addEventListener("click", DarkModeToggle);
onclick = "DarkModeToggle()"
//var themeIcon = document.querySelector("#hboxMenu li #darkThemeIcon")
function Initialiser(){
    let element = document.body; 
    let themeIcon = document.getElementById("themeIcon");
    let aboutMeBox = document.getElementById("AboutMe");
    console.log(document.body)
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(e => {
 if (e.matches) {
    element.classList.toggle("dark-mode");
    //element.classList.toggle("ligthTheme")
    aboutMeBox.classList.toggle("dark-mode-box")
    //aboutMeBox.classList.toggle("ligthTheme-box")
    themeIcon.innerHTML = "light_mode"
  // Theme set to dark.
 } else {
    element.classList.toggle("dark-mode");
    //element.classList.toggle("dark-mode")
    //element.classList.toggle("ligthTheme")
     //aboutMeBox.classList.toggle("ligthTheme-box")
     themeIcon.innerHTML = "dark_mode"
    // Theme set to light.
  }
});
    //document.body.classList.toggle("dark-mode");
    //document.getElementById("AboutMe").classList.toggle("dark-mode-box");
    
}
//var darkBool = 0
function DarkModeToggle() {
    //darkBool
    let element = document.body; 
    let themeIcon = document.getElementById("themeIcon");
    let aboutMeBox = document.getElementById("AboutMe");
    //element.classList.toggle("dark-mode",false);
    debugger
    //console.log(element.getElementsByClassName("ligthTheme").value)
    
    //console.log(this.clicked)
   
   /* if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        element.classList.toggle("dark-mode");
        //element.classList.toggle("ligthTheme")
        //aboutMeBox.classList.toggle("dark-mode-box")
        aboutMeBox.classList.toggle("ligthTheme-box")
        themeIcon.innerHTML = "light_mode"
    }*/
    if(element.classList.contains("dark-mode")){
        element.classList.toggle("dark-mode");
        //element.classList.toggle("ligthTheme")
        aboutMeBox.classList.toggle("dark-mode-box")
        //aboutMeBox.classList.toggle("ligthTheme-box")
        themeIcon.innerHTML = "light_mode"
        //darkBool = 1
        //console.log(element.classList.toggle("dark-mode"))
     // return  
    }
    /*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        element.classList.toggle("dark-mode");
        // element.classList.toggle("dark-mode")
         //element.classList.toggle("ligthTheme")
         aboutMeBox.classList.toggle("dark-mode-box")
         themeIcon.innerHTML = "dark_mode"
    }*/
    else {
        element.classList.toggle("dark-mode");
       // element.classList.toggle("dark-mode")
        //element.classList.toggle("ligthTheme")
        aboutMeBox.classList.toggle("dark-mode-box")
        themeIcon.innerHTML = "dark_mode"
        //darkBool = 0
        //console.log(element.classList.toggle("dark-mode"))
    } 
    
    
}
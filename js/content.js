

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById("cont")
    const featuredBut = document.getElementById("cat1")
    const projectsButt = document.getElementById("cat2")
    const faqButt = document.getElementById("cat3")
    const contactButt = document.getElementById("cat4")
    featuredBut.addEventListener("click", () => {
        content.innerHTML = '<h2><a href="https://github.com/mwojd/manipulatedFortuneWheel" target="_blank">a fortune wheel with manipulated odds -html/css/js</br></a></h2>'
    })
    projectsButt.addEventListener("click", () => {
        content.innerHTML='<h3><a href="https://github.com/mwojd/reallySimplePortfolio" target="_blank">THIS website - html/css/js</a></br>\
        <a href="https://github.com/mwojd/manipulatedFortuneWheel" target="_blank">a fortune wheel with manipulated odds - c++</a></br>\
        <a href="https://github.com/mwojd/ProjektSystemy" target="_blank">a simple "presentation" about operating systems -html/css/js</a></h3>'
    })
    faqButt.addEventListener("click", () => {
        content.innerHTML='Q:do you take commisions?</br>A:since I am a student I do not have any time to spend however if you can give me a good price then I will surely do it!<br>\
        <br>Q:would you say that you are experienced or advanced in your field?</br>A:no! not at all! I still have a lot to learn</br> '
    })
    contactButt.addEventListener("click", () => {
        content.innerHTML= '<h1>discord: teev#9322</br>\
        mail: wojdaszewiczmikolaj@gmail.com</br>\
        <a href="https://github.com/mwojd" target="_blank">github: @mwojd</a></h1>';
    })
});
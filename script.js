// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

window.scroll({behavior:"smooth"})
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         // document.querySelector(this.getAttribute("href")).scrollIntoView({
//         //     behavior: "smooth",
//         //     offset: "100px",
//         // });
//         var element = document.querySelector(this.getAttribute("href"));
//         var headerOffset = 45;
//         var elementPosition = element.getBoundingClientRect().top;
//         var offsetPosition =
//             elementPosition + window.scrollY - headerOffset;

//         window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth",
//         });
//     });
// });
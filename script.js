//By Padmanabh PV
const sections = document.querySelectorAll('#scroll-contents section');
const navLinks = document.querySelectorAll('.floatbar a');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + 200;
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      const id = section.id;
      const navLink = document.querySelector(`.floatbar a[href="#${id}"]`);
      navLinks.forEach((link) => link.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
});

//Snowfall animation

// const snowfallContainer = document.getElementById("home");

// function createSnowflake() {
//     const curDate = new Date();
//     const month = curDate.getMonth()+1;
//     if(month==8){
//         const snowflake = document.createElement("div");
//         snowflake.className = "snowflake";
//         snowflake.style.left = `${Math.random() * window.innerWidth}px`;
//         snowfallContainer.appendChild(snowflake);
//         setTimeout(() => {
//             snowflake.remove();
//         }, 3000);
//     }
// }
// setInterval(createSnowflake, 100);

// //Typewriter effect

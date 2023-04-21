// 1.
const xMen = document.getElementById(`x-men`);
// 2. 
const centered = document.getElementsByClassName(`center`);
// 3.
const batman = document.querySelector(`div`);
// 4.
const h3s = document.querySelectorAll(`h3`);
// 5a.
const h1 = document.querySelector(`h1`);
console.dir(h1);
// 5b.
h1.innerText = "The Best Animated Superhero TV Shows Ever!";
// 6a.
const honorableMentions = document.querySelector(`#honorable-mentions`);
console.dir(honorableMentions);
// 6b.
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;
// 7a.
const aTag = document.querySelector(`a`);
console.dir(aTag);
// 7b.
aTag.href = `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/`;
// 8. 
h1.classList.add(`background`, `text-color`);
// 9.
h1.classList.remove(`background`);
// 10a.
const h4 = document.createElement(`h4`);
console.dir(h4);
// 10b.
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`;
// 10c.
document.querySelector(`body`).prepend(h4);
// 11a.
const h5 = document.createElement(`h5`);
console.dir(h5);
// 11b.
h5.innerText = "Heroes in a half shell Turtle Power!";
// 11c.
aTag.insertAdjacentElement(`afterend`, h5);
// 12. Using remove, remove the "Superman" li (NOTE: You will need to select the li first)
document.querySelector(`li`).remove();
// BONUS
// 13a. 
const divs = document.querySelectorAll(`div`);
console.dir(divs);
// 13b. Using classList, TOGGLE the "background" class on for all the divs (NOTE: You will need a loop to do this)
for (d of divs){
    d.classList.toggle(`background`);
}
// 14a.
const avengers = ["Forever", "Fight", "As", "One", "AVENGERS", "ASSEMBLE!"];
// 14b.
for (w of avengers){
    newSpan = document.createElement(`span`);
    newSpan.innerText = w + " ";
    body.append(newSpan);
}
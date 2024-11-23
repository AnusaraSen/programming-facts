const programmingFacts = [
    "The first computer programmer was a woman named Ada Lovelace, who wrote the first algorithm in the 1840s.",
    "The term 'bug' in programming came from an actual moth that was found in Harvard's Mark II computer in 1947.",
    "Python was named after Monty Python's Flying Circus, not the snake.",
    "The first computer mouse was made of wood in the 1960s.",
    "The programming language BASIC was created by John Kemeny and Thomas Kurtz in 1964.",
    "Linux's mascot, Tux the penguin, was chosen because Linus Torvalds was once bitten by a penguin.",
    "The first website ever created (info.cern.ch) is still online today.",
    "JavaScript was created in just 10 days by Brendan Eich in 1995.",
    "The first computer game was created in 1961 called 'Spacewar!'",
    "The QWERTY keyboard layout was designed in 1873 to prevent typewriter jams.",
    "Java was originally called 'Oak' after a tree outside the developer's office.",
    "The first computer virus was created in 1983 and was called 'Elk Cloner'.",
    "C++ was originally named 'C with Classes' before being renamed in 1983.",
    "Fortran (released in 1957) is the oldest programming language still in use today.",
    "The first Apple computer was sold for $666.66.",
    "The first programmer to marry her computer was a woman named Sandra.",
    "Ruby was created by Yukihiro Matsumoto because he wanted a 'more enjoyable' programming language.",
    "The Matrix's green code was actually sushi recipes written in Japanese.",
    "Grace Hopper is credited with writing the first compiler in 1952.",
    "The first email spam was sent in 1978 by Gary Thuerk."
];

function generateFact() {
    const factBox = document.getElementById('factText');
    const randomFact = programmingFacts[Math.floor(Math.random() * programmingFacts.length)];
    
    factBox.style.opacity = 0;
    setTimeout(() => {
        factBox.textContent = randomFact;
        factBox.style.opacity = 1;
    }, 200);
}

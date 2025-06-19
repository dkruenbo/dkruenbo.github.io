const button = document.createElement('button');
button.innerText = 'Click Me!';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';
document.body.appendChild(button);

const randomFacts = [
    "Bananas are berries, but strawberries aren't.",
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "A group of flamingos is called a 'flamboyance'.",
    "Wombat poop is cube-shaped."
];

button.addEventListener('click', () => {
    const fact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
    alert(fact);
});
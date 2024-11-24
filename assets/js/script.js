// Mystery Button Feature
const randomButton = document.getElementById('random-button');
const randomResult = document.getElementById('random-result');

randomButton.addEventListener('click', () => {
  const activities = [
    "Write a story about a talking banana 🍌",
    "Pretend to be a robot for 1 minute 🤖",
    "Do 10 jumping jacks 🚶‍♀️",
    "Draw a cat in 30 seconds 🐱",
    "Try to touch your toes without bending your knees 🤸‍♂️",
  ];
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];
  randomResult.textContent = randomActivity;
});

// Chaos Arena
const startArenaButton = document.getElementById('start-arena');
const arenaInstructions = document.getElementById('arena-instructions');

startArenaButton.addEventListener('click', () => {
  const challenges = [
    "Type the alphabet backward!",
    "Find the number 7 in a sea of 3s: 3337333",
    "Click as fast as you can for 10 seconds!",
  ];
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  arenaInstructions.textContent = randomChallenge;
});

// Sound Chaos Board
document.querySelectorAll('.sound-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const sound = new Audio(`assets/sounds/${button.dataset.sound}.mp3`);
    sound.play();
  });
});

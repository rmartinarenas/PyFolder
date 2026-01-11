const rollBtn = document.getElementById("roll-btn");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");

rollBtn.addEventListener("click", () => {
  let frames = 10; // number of animation frames
  let i = 0;

  const animation = setInterval(() => {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    dice1.src = `images/dice${d1}.png`;
    dice2.src = `images/dice${d2}.png`;

    i++;
    if (i >= frames) {
      clearInterval(animation);

      const total = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;

      // Simple decision logic
      if (total <= 4) result.textContent = "❌ NO";
      else if (total <= 8) result.textContent = "🤔 MAYBE";
      else result.textContent = "✅ YES";
    }
  }, 100); // 100ms per frame
});

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
    const d3 = Math.floor(Math.random() * 6) + 1;
    const d4 = Math.floor(Math.random() * 6) + 1;
    const d5 = Math.floor(Math.random() * 6) + 1;

    dice1.src = `images/dice${d1}.jpg`;
    dice2.src = `images/dice${d2}.jpg`;
    dice3.src = `images/dice${d3}.jpg`;
    dice4.src = `images/dice${d4}.jpg`;
    dice5.src = `images/dice${d5}.jpg`;


    i++;
    if (i >= frames) {
      clearInterval(animation);

      const total = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;

      // Simple decision logic
      // Example dice rolls
        const n = [d1,d2,d3,d4,d5];            
        // Labels for dice
        const labels = ["ones", "twos", "threes", "fours", "fives", "sixes"];

        // Initialize counts array
        let counts = [0, 0, 0, 0, 0, 0];

        // Count occurrences
        for (let roll of n) {
            if (roll >= 1 && roll <= 6) {
                counts[roll - 1] += 1; // increment the count for that number
            }
        }

        // Build array of objects with labels
        let labeledCounts = labels.map((label, index) => {
            return { label: label, count: counts[index] };
        });

        // Filter out zeros
        let nonZeroCounts = counts.filter(c => c !== 0);

        let moves = 0;
        let figure = 'Nada';

        if (nonZeroCounts.length==5) {
            console.log('escalera');
            figure = 'escalera';
            moves = 0;
        }

        else if (nonZeroCounts.length==4) {
            console.log('Pareja');
            figure = 'Pareja';
            moves = 1;
        }

        else if (nonZeroCounts.length==3) {
            if (nonZeroCounts.includes(3)) {
                console.log('trio');
                figure = 'Trio';
                moves = 2;
            } else {
                console.log('Doble Pareja');
                moves = 2;
                figure = 'Doble Pareja';
            }}

        else if (nonZeroCounts.length==2) {
            if (nonZeroCounts.includes(4)) {
                console.log('Poker');
                figure = 'Poker';
                moves = 5;
            } else {
                console.log('Full');
                moves = 4;
                figure = 'Full';
            }}

        else if (nonZeroCounts.length==1) {
            console.log('Repoker');
            figure = 'Repoker';
            moves = 6;
        }
    
        console.log('numero de movimientos', moves);


      result.textContent = 'Ha salido ' + figure + '. Numero de movimientos: ' + moves;
    }
  }, 100); // 100ms per frame
});

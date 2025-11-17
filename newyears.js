function createFirework(x, y) {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];

        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 50 + Math.random() * 50;

        firework.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
        firework.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');

        document.body.appendChild(firework);

        setTimeout(() => firework.remove(), 1000);
    }
}

function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ffd700'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

function startCelebration() {
    document.getElementById('celebration').classList.remove('hidden');
    createConfetti();

    const interval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFirework(x, y);
    }, 300);

    setTimeout(() => clearInterval(interval), 5000);
}

// Auto fireworks
setTimeout(() => {
    createFirework(window.innerWidth / 2, window.innerHeight / 3);
}, 1000);

setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.5;
    createFirework(x, y);
}, 3000);

document.getElementById('ewaste-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const devices = document.getElementById('devices').value;
    const result = document.getElementById('result');

    if (!devices || devices < 1) {
        result.innerHTML = `<p class="error">Please enter a valid number of devices.</p>`;
        result.classList.add('fade-in');
        return;
    }

    const footprint = (devices * 1.5).toFixed(2); // Adjust multiplier as needed
    result.innerHTML = `<p>Your estimated e-waste footprint is <strong>${footprint} kg</strong>.</p>`;

    result.classList.add('fade-in');

    setTimeout(() => result.classList.remove('fade-in'), 500);
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('ewaste-form').reset();
    document.getElementById('result').innerHTML = '';
});
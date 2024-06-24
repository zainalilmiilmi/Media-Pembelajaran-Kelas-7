function checkAnswer(answer) {
    if (answer === 'correct') {
        alert('Jawaban benar!');
        window.location.href = 'conclusion.html';
    } else {
        alert('Jawaban salah, coba lagi.');
    }
}

document.getElementById('rsvpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;

    // Здесь можно добавить отправку данных на сервер
    // Например, через fetch или XMLHttpRequest

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Спасибо, ${name}! Ваше участие подтверждено.`;
    responseMessage.style.color = 'green';

    // Очистка формы
    document.getElementById('rsvpForm').reset();
});

// Автовоспроизведение музыки
document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('backgroundMusic');
    music.play();
});

function playSound(sound) {
  var song = document.getElementById(sound);
  song.volume = 1;
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

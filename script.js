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

 const phoneNumber = '79876270460'; // замените на свой номер
  
  // Обработчик клика
  document.getElementById('aigulButton').addEventListener('click', function() {
    // Открываем чат в новой вкладке
    window.open('https://wa.me/' + phoneNumber, '_blank');
  });
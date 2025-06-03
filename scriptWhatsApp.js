 const phoneNumber = '79373084282'; // замените на свой номер
  
  // Обработчик клика
  document.getElementById('aigulButton').addEventListener('click', function() {
    // Открываем чат в новой вкладке
    window.open('https://wa.me/' + phoneNumber, '_blank');
  });

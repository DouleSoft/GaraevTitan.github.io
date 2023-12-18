function goToAlbum() {
    window.location.href = 'photo-album.html'; // Замените 'photo-album.html' на ваш реальный путь к странице фотоальбома
}
function sendMessage() {
    // Получите значение сообщения из формы
    var message = document.getElementById('message').value;

    // Замените 'YOUR_BOT_TOKEN' и 'YOUR_CHAT_ID' на реальные значения
    var botToken = '6769759776:AAEn_U19LMPxR7kMu40x5Okl5SZVHyHNK7U';
    var chatId = '-1001948135788';

    // Формируем URL для отправки сообщения
    var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    // Отправляем запрос на сервер Telegram
    fetch(apiUrl, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Сообщение успешно отправлено!');
            } else {
                alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
        });
}
